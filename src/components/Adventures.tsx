import { categories } from '../data/quests';
import { asset, homeHash } from '../lib/paths';
import './Adventures.css';

export function Adventures() {
  return (
    <section id="adventures" className="adventures">
      <div className="container adventures__head">
        <p className="eyebrow">Секция 01</p>
        <h2 className="section-title">Выберите приключение</h2>
        <p className="section-lead">
          Разные форматы — разная подача. Хоррор, детские программы, выездные игры, праздники и
          Lounge.
        </p>
      </div>

      <div className="adventures__rail">
        {categories.map((cat, i) => (
          <a
            key={cat.id}
            href={homeHash(cat.href.replace('#', ''))}
            className={`adventure-panel adventure-panel--${cat.tone} adventure-panel--${i % 3 === 0 ? 'wide' : 'std'}`}
          >
            <img src={asset(cat.image)} alt="" loading="lazy" />
            <div className="adventure-panel__veil" />
            <div className="adventure-panel__body">
              <span className="eyebrow">{String(i + 1).padStart(2, '0')}</span>
              <h3>{cat.title}</h3>
              <p>{cat.lead}</p>
              <span className="adventure-panel__cta">Смотреть</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
