import { Link } from 'react-router-dom';
import { contact } from '../data/contact';
import { homeHash } from '../lib/paths';
import './Footer.css';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <p className="site-footer__brand">NOSFERATU</p>
          <p className="site-footer__tag">{contact.tagline}</p>
        </div>
        <div className="site-footer__links">
          <Link to="/quests">Каталог игр</Link>
          <a href={homeHash('booking')}>Запись</a>
          <a href={contact.vk} target="_blank" rel="noreferrer">
            VK
          </a>
          <a href={contact.phoneHref}>{contact.phone}</a>
        </div>
        <p className="site-footer__note">
          Йошкар-Ола · работа по предварительной записи. Данные цен и графиков сверяйте при
          бронировании.
        </p>
      </div>
    </footer>
  );
}
