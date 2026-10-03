"""
Re-encode oversized source images in place.

The repo was shipping 24 MB, 15 MB and 14 MB JPEGs straight to visitors. Several
source files are 6000 px to 8000 px on the long edge, which is print resolution
being sent to phones. This caps the long edge and re-encodes at a sane quality,
keeping the same filenames so no imports have to change.

    python scripts/optimize_images.py            # dry run, prints the plan
    python scripts/optimize_images.py --write    # rewrite the files

Originals are copied to .image-backup/ the first time a file is touched, and
.image-backup/ is gitignored.

Uses Pillow rather than sharp: sharp throws an UNKNOWN open error on this
Windows setup, Pillow does not.
"""
import os
import shutil
import sys

from PIL import Image, ImageOps

DIRS = ['src/assets', 'public/assets']
BACKUP = '.image-backup'
MAX_EDGE = 2000       # nothing on the site is displayed wider than this
JPEG_QUALITY = 78
THRESHOLD = 600 * 1024  # leave anything already under 600 KB alone

WRITE = '--write' in sys.argv


def mb(n):
    return f'{n / 1048576:.2f} MB'


def main():
    before = after = count = 0
    skipped = []

    for d in DIRS:
        if not os.path.isdir(d):
            continue

        for name in sorted(os.listdir(d)):
            if not name.lower().endswith(('.jpg', '.jpeg', '.png')):
                continue

            path = os.path.join(d, name)
            size = os.path.getsize(path)
            if size < THRESHOLD:
                continue

            try:
                im = Image.open(path)
                im = ImageOps.exif_transpose(im)
                w, h = im.size
                capped = max(w, h) > MAX_EDGE
                if capped:
                    im.thumbnail((MAX_EDGE, MAX_EDGE), Image.LANCZOS)

                tmp = path + '.tmp'
                if name.lower().endswith('.png'):
                    im.save(tmp, 'PNG', optimize=True)
                else:
                    im.convert('RGB').save(
                        tmp, 'JPEG', quality=JPEG_QUALITY, optimize=True, progressive=True
                    )

                new = os.path.getsize(tmp)

                # Never make a file bigger than it already was.
                if new >= size:
                    os.remove(tmp)
                    skipped.append(f'{name} (re-encode was larger)')
                    continue

                before += size
                after += new
                count += 1
                print(
                    f'  {name[:52]:<52}{mb(size):>10} -> {mb(new):>10}'
                    f'  ({w}x{h}{f" capped to {MAX_EDGE}" if capped else ""})'
                )

                if WRITE:
                    b = os.path.join(BACKUP, d)
                    os.makedirs(b, exist_ok=True)
                    bak = os.path.join(b, name)
                    if not os.path.exists(bak):
                        shutil.copy2(path, bak)
                    os.replace(tmp, path)
                else:
                    os.remove(tmp)

            except Exception as exc:  # noqa: BLE001 - report and continue
                skipped.append(f'{name} ({exc})')

    if count:
        print(
            f'\n{count} files  {mb(before)} -> {mb(after)}  '
            f'(saved {mb(before - after)}, {100 - after / before * 100:.1f}%)'
        )
    if skipped:
        print(f'\nskipped {len(skipped)}:')
        for s in skipped:
            print('   ', s)
    if not WRITE:
        print('\nDry run. Re-run with --write to apply.')


if __name__ == '__main__':
    main()
