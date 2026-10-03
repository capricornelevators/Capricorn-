Instagram post images.

The Instagram section renders a grid when images are supplied here. It is empty
by default on purpose: Instagram CDN URLs are signed and expire, so hotlinking
them would break the grid silently a few days later.

To show real posts:
  1. Export 6 to 9 square images from the @capricornelevators profile
  2. Save them here as 01.jpg, 02.jpg and so on, around 800x800
  3. Add them to INSTAGRAM_POSTS in src/data/company.js with real alt text
     describing what is in each photo
