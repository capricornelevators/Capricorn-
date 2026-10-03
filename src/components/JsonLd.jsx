/**
 * Renders a JSON-LD block. Server component — no 'use client', so the markup is
 * present in the statically exported HTML where crawlers can read it.
 */
export default function JsonLd({ data }) {
  if (!data) return null;

  return (
    <script
      type="application/ld+json"
      // Schema objects are built in src/lib/schema.js from our own constants,
      // never from user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
