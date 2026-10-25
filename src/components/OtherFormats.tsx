import { Link } from 'react-router-dom';
import { contact } from '../data/contact';
import { kidsQuests } from '../data/quests';
import { asset, homeHash } from '../lib/paths';
import './OtherFormats.css';

export function OtherFormats() {
  return (
    <section id="other" className="other">
      <div className="container other__layout">
        <div className="other__intro">
          <p className="eyebrow">Секция 03</p>
          <h2 className="section-title">Другие форматы</h2>
          <p className="section-lead">
            Здесь другая температура бренда: без кровавой графики взрослых хорроров — для семей,
            детей и логических компаний.
          </p>
        </div>

        <div className="other__kids">
          {kidsQuests.map((q) => (
            <article key={q.id} className="kids-card">
              <img src={asset(q.image)} alt={q.title} loading="lazy" />
              <div>
                <h3>{q.title}</h3>
                <p>{q.synopsis}</p>
                <p className="kids-card__hint">
                  Возраст, длительность и стоимость подтверждайте при записи — в открытых источниках
                  полный прайс не зафиксирован.
                </p>
                <div className="kids-card__actions">
                  <Link to={`/quests/${q.id}`} className="btn btn-bone">
                    Подробнее
                  </Link>
                  <a href={contact.vk} className="btn btn-ghost" target="_blank" rel="noreferrer">
                    Написать в VK
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="other__extras">
          <article className="extra-block">
            <h3>Выездные логические квесты</h3>
            <p>
              В материалах проекта упоминаются выездные логические форматы и «квест в коробке»
              («Нераскрытое дело»). Актуальный набор и условия — только через запись в сообществе.
            </p>
            <a className="text-link" href={contact.vk} target="_blank" rel="noreferrer">
              Уточнить в VK →
            </a>
          </article>
          <article className="extra-block">
            <h3>Праздники и анимация</h3>
            <p>
              Дни рождения, тематические программы и анимация. На площадках есть зоны для
              праздников; тариф зоны на Машиностроителей в открытых источниках — от 990 ₽/час.
            </p>
            <a className="text-link" href={homeHash('booking')}>
              Записаться →
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
