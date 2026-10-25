import { useState } from 'react';
import { gallery } from '../data/gallery';
import { asset } from '../lib/paths';
import './Gallery.css';

export function Gallery() {
  const [active, setActive] = useState<number | null>(null);
  const item = active !== null ? gallery[active] : null;

  return (
    <section id="gallery" className="gallery">
      <div className="container gallery__head">
        <p className="eyebrow">Секция 05</p>
        <h2 className="section-title">Атмосфера</h2>
        <p className="section-lead">
          Кадры из сообщества NOSFERATU: декорации, афиши, площадки и моменты игр.
        </p>
      </div>

      <div className="gallery__grid">
        {gallery.map((g, i) => (
          <button
            key={g.src}
            type="button"
            className={`gallery__item gallery__item--${g.span ?? 'normal'}`}
            onClick={() => setActive(i)}
          >
            <img src={asset(g.src)} alt={g.alt} loading="lazy" />
          </button>
        ))}
      </div>

      {item && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={item.alt}
          onClick={() => setActive(null)}
        >
          <button type="button" className="lightbox__close" aria-label="Закрыть">
            ×
          </button>
          <img src={asset(item.src)} alt={item.alt} onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </section>
  );
}
