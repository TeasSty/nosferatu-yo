import { contact } from '../data/contact';
import { locations } from '../data/locations';
import './Booking.css';

export function Booking() {
  return (
    <section id="booking" className="booking">
      <div className="container booking__layout">
        <div className="booking__intro">
          <p className="eyebrow">Секция 08</p>
          <h2 className="section-title">Бронирование и адреса</h2>
          <p className="section-lead">
            Онлайн-формы без реальной отправки здесь нет. Запись — по телефону или в сообщениях
            VK.
          </p>

          <ol className="booking__steps">
            <li>
              <strong>01</strong>
              <span>Выберите направление или игру</span>
            </li>
            <li>
              <strong>02</strong>
              <span>Посмотрите адрес, режим и доступные сведения</span>
            </li>
            <li>
              <strong>03</strong>
              <span>Позвоните или напишите в VK — уточните дату и время</span>
            </li>
          </ol>

          <div className="booking__contacts">
            <a className="btn btn-primary" href={contact.phoneHref}>
              {contact.phone}
            </a>
            <a className="btn btn-ghost" href={contact.vk} target="_blank" rel="noreferrer">
              Сообщество VK
            </a>
            <a className="btn btn-ghost" href={contact.telegram} target="_blank" rel="noreferrer">
              Telegram
            </a>
          </div>
          <p className="booking__mail">
            Почта: <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </p>
        </div>

        <div className="booking__locations">
          {locations.map((loc) => (
            <article key={loc.id} className="loc-card">
              <h3>{loc.shortAddress}</h3>
              <p className="loc-card__addr">{loc.address}</p>
              {loc.landmark && <p className="loc-card__land">{loc.landmark}</p>}
              <p className="loc-card__hours">
                {loc.hours}
                {loc.hoursNote ? ` · ${loc.hoursNote}` : ''}
              </p>
              <ul>
                {loc.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
