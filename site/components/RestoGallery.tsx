"use client";

import { useState } from "react";

type Photo = {
  src: string;
  alt: string;
  pos?: string;
};

/* Photo principale + vignettes cliquables : un clic sur une vignette l'affiche en grand */
export default function RestoGallery({ photos }: { photos: Photo[] }) {
  const [current, setCurrent] = useState(0);
  const main = photos[current];

  return (
    <>
      <div className="oc-card-photo">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={main.src}
          alt={main.alt}
          loading="lazy"
          style={{ objectPosition: main.pos }}
        />
      </div>
      <div className="oc-resto-gallery">
        {photos.map((p, i) => (
          <button
            key={p.src}
            type="button"
            className={i === current ? "is-active" : undefined}
            onClick={() => setCurrent(i)}
            aria-label={`Afficher : ${p.alt}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.src} alt="" loading="lazy" style={{ objectPosition: p.pos }} />
          </button>
        ))}
      </div>
    </>
  );
}
