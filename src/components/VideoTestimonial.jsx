'use client';

import { useState } from 'react';
import './VideoTestimonial.css';

/**
 * Customer testimonial video.
 *
 * Loads a thumbnail first and only swaps in the YouTube iframe when the visitor
 * clicks play. A YouTube embed pulls well over a megabyte before anyone presses
 * play, which would undo the page weight work on every landing page carrying one.
 *
 * Uses youtube-nocookie so no tracking cookie is set unless the video is played.
 */
export default function VideoTestimonial({ video, heading }) {
  const [playing, setPlaying] = useState(false);

  if (!video?.id) return null;

  const thumb = `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <section className="vt">
      <h2>{heading}</h2>

      <figure className="vt-figure">
        {playing ? (
          <iframe
            className="vt-frame"
            src={`https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1&rel=0`}
            title={video.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            className="vt-poster"
            onClick={() => setPlaying(true)}
            aria-label={`Play video: ${video.title}`}
          >
            <img src={thumb} alt="" width="480" height="360" loading="lazy" />
            <span className="vt-play" aria-hidden="true" />
          </button>
        )}

        <figcaption className="vt-caption">
          {video.customer ? (
            <>
              <strong>{video.customer}</strong>
              {video.customerDetail ? `, ${video.customerDetail}` : null}
            </>
          ) : (
            video.title
          )}
          {video.quote ? <q className="vt-quote">{video.quote}</q> : null}
        </figcaption>
      </figure>
    </section>
  );
}
