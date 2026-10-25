import { Link } from 'react-router-dom';
import { getLocation } from '../data/locations';
import { quests } from '../data/quests';
import { asset } from '../lib/paths';
import './QuestsPage.css';

export function QuestsPage() {
  return (
    <main className="quests-index">
      <div className="container quests-index__head">
        <p className="eyebrow">Каталог</p>
        <h1 className="section-title">Все программы</h1>
        <p className="section-lead">
          Подтверждённые публичные карточки NOSFERATU. Перед записью сверяйте доступность.
        </p>
      </div>
      <div className="quests-index__grid container">
        {quests.map((q) => (
          <Link key={q.id} to={`/quests/${q.id}`} className="quests-index__card">
            <img src={asset(q.image)} alt="" loading="lazy" />
            <div>
              <p className="eyebrow">{getLocation(q.locationId).shortAddress}</p>
              <h2>{q.title}</h2>
              {q.priceFrom && <span>{q.priceFrom}</span>}
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
