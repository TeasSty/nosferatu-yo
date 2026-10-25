import { contact } from '../data/contact';
import { asset } from '../lib/paths';
import './Lounge.css';

export function Lounge() {
  return (
    <section id="lounge" className="lounge">
      <div className="lounge__media">
        <img src={asset('images/lounge/lounge1.jpg')} alt="NOSFERATU Lounge" loading="lazy" />
        <img src={asset('images/lounge/lounge2.jpg')} alt="" loading="lazy" />
      </div>
      <div className="lounge__copy container">
        <p className="eyebrow">Секция 04</p>
        <h2 className="section-title">NOSFERATU Lounge</h2>
        <p className="section-lead">
          Пространство для дней рождения, вечеринок и закрытых компаний — рядом с игровыми
          площадками.
        </p>
        <ul className="lounge__facts">
          <li>
            <strong>Вместимость</strong>
            <span>до 30 человек одновременно (Машиностроителей, 2А)</span>
          </li>
          <li>
            <strong>Зоны праздника</strong>
            <span>2 зоны на Машиностроителей — от 990 ₽/час (12 и 30 чел.)</span>
          </li>
          <li>
            <strong>Первомайская</strong>
            <span>зона для праздников до 20 человек (тариф уточняйте)</span>
          </li>
          <li>
            <strong>Баумана</strong>
            <span>гостевая зона до 7 человек; отдельной праздничной зоны нет</span>
          </li>
        </ul>
        <div className="lounge__actions">
          <a className="btn btn-primary" href={contact.phoneHref}>
            Обсудить мероприятие
          </a>
          <a className="btn btn-ghost" href={contact.vk} target="_blank" rel="noreferrer">
            Написать в VK
          </a>
        </div>
      </div>
    </section>
  );
}
