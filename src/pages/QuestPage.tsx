import { Link, useParams } from 'react-router-dom';
import { contact } from '../data/contact';
import { getLocation } from '../data/locations';
import { getQuest, quests } from '../data/quests';
import { asset, homeHash } from '../lib/paths';
import './QuestPage.css';

export function QuestPage() {
  const { id } = useParams();
  const quest = id ? getQuest(id) : undefined;

  if (!quest) {
    return (
      <main className="quest-page container">
        <p className="eyebrow">404</p>
        <h1 className="section-title">Игра не найдена</h1>
        <Link className="btn btn-ghost" to="/quests">
          К каталогу
        </Link>
      </main>
    );
  }

  const loc = getLocation(quest.locationId);
  const related = quests
    .filter((q) => q.locationId === quest.locationId && q.id !== quest.id)
    .slice(0, 3);

  return (
    <main className="quest-page">
      <div className="quest-page__hero">
        <img src={asset(quest.image)} alt={quest.title} />
        <div className="quest-page__hero-veil" />
        <div className="container quest-page__hero-copy">
          <a href={homeHash('horror')} className="eyebrow">
            ← К каталогу
          </a>
          <h1>{quest.title}</h1>
          <p>{loc.address}</p>
        </div>
      </div>

      <div className="container quest-page__body">
        <div className="quest-page__main">
          <p className="quest-page__synopsis">{quest.synopsis}</p>
          <div className="meta-row">
            {quest.age && <span>{quest.age}</span>}
            {quest.duration && <span>{quest.duration}</span>}
            {quest.players && <span>{quest.players} игроков</span>}
            {quest.priceFrom && <span>{quest.priceFrom}</span>}
          </div>
          {quest.priceNote && <p className="quest-page__note">{quest.priceNote}</p>}
          {quest.status === 'confirm' && (
            <p className="quest-page__warn">
              Часть параметров этой программы требует подтверждения при записи — в открытых
              источниках данные неполные или могли измениться.
            </p>
          )}

          {quest.modes && (
            <div className="quest-block">
              <h2>Режимы</h2>
              <ul>
                {quest.modes.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
          )}

          {quest.features && (
            <div className="quest-block">
              <h2>Особенности</h2>
              <ul>
                {quest.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <aside className="quest-page__aside">
          <div className="quest-book">
            <h2>Запись</h2>
            <p>
              Выберите дату и состав команды — подтвердите по телефону или в VK. Предоплата для
              многих игр — 500 ₽ (по данным агрегаторов).
            </p>
            <a className="btn btn-primary" href={contact.phoneHref}>
              {contact.phone}
            </a>
            <a className="btn btn-ghost" href={contact.vk} target="_blank" rel="noreferrer">
              Написать в VK
            </a>
            <p className="quest-book__loc">
              Площадка: <strong>{loc.shortAddress}</strong>
              <br />
              {loc.hours}
              {loc.hoursNote ? ` · ${loc.hoursNote}` : ''}
            </p>
          </div>

          {related.length > 0 && (
            <div className="quest-related">
              <h2>На этой площадке</h2>
              {related.map((q) => (
                <Link key={q.id} to={`/quests/${q.id}`}>
                  {q.title}
                </Link>
              ))}
            </div>
          )}
        </aside>
      </div>
    </main>
  );
}
