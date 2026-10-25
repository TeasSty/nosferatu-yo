import { Link } from 'react-router-dom';
import { contact } from '../data/contact';
import { getLocation } from '../data/locations';
import { altQuests, mainHorror } from '../data/quests';
import { asset } from '../lib/paths';
import './HorrorQuests.css';

export function HorrorQuests() {
  return (
    <section id="horror" className="horror">
      <div className="container horror__head">
        <p className="eyebrow">Секция 02 · ключевой каталог</p>
        <h2 className="section-title">Хоррор-квесты</h2>
        <p className="section-lead">
          Перформансы с актёрами. Цены и режимы — только из подтверждённых публичных источников;
          перед визитом сверяйте детали при записи.
        </p>
      </div>

      <div className="horror__list">
        {mainHorror.map((quest, index) => {
          const loc = getLocation(quest.locationId);
          const reverse = index % 2 === 1;
          return (
            <article
              key={quest.id}
              className={`horror-feature ${reverse ? 'is-reverse' : ''}`}
            >
              <Link to={`/quests/${quest.id}`} className="horror-feature__media">
                <img src={asset(quest.image)} alt={quest.title} loading="lazy" />
                <span className="horror-feature__index">
                  {String(index + 1).padStart(2, '0')}
                </span>
              </Link>
              <div className="horror-feature__body">
                <p className="eyebrow">{loc.shortAddress}</p>
                <h3>{quest.title}</h3>
                <p className="horror-feature__text">{quest.synopsis}</p>
                <div className="meta-row">
                  {quest.age && <span>{quest.age}</span>}
                  {quest.duration && <span>{quest.duration}</span>}
                  {quest.players && <span>{quest.players} игроков</span>}
                  {quest.priceFrom && <span>{quest.priceFrom}</span>}
                </div>
                {quest.priceNote && <p className="horror-feature__note">{quest.priceNote}</p>}
                <div className="horror-feature__actions">
                  <Link className="btn btn-ghost" to={`/quests/${quest.id}`}>
                    Подробнее
                  </Link>
                  <a className="btn btn-primary" href={contact.phoneHref}>
                    Забронировать
                  </a>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className="container horror__alts">
        <div className="horror__alts-head">
          <h3>Альтернативные сценарии</h3>
          <p>
            Другой сюжет и загадки на знакомой площадке. Актуальность дат — только при записи.
          </p>
        </div>
        <div className="alt-grid">
          {altQuests.map((q) => (
            <Link key={q.id} to={`/quests/${q.id}`} className="alt-card">
              <img src={asset(q.image)} alt="" loading="lazy" />
              <div>
                <h4>{q.title}</h4>
                <p>{getLocation(q.locationId).shortAddress}</p>
                {q.priceFrom && <span>{q.priceFrom}</span>}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
