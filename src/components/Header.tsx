import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { contact } from '../data/contact';
import { homeHash } from '../lib/paths';
import './Header.css';

const links = [
  { hash: 'adventures', label: 'Приключения' },
  { hash: 'horror', label: 'Хоррор' },
  { hash: 'other', label: 'Другое' },
  { hash: 'lounge', label: 'Lounge' },
  { hash: 'gallery', label: 'Атмосфера' },
  { hash: 'booking', label: 'Запись' },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="site-header__inner container">
        <Link to="/" className="site-logo" onClick={() => setOpen(false)}>
          <span className="site-logo__mark">NOSFERATU</span>
          <span className="site-logo__city">{contact.city}</span>
        </Link>

        <nav className="site-nav" aria-label="Основная навигация">
          {links.map((l) => (
            <a
              key={l.hash}
              href={homeHash(l.hash)}
              className="site-nav__link"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a className="site-header__phone" href={contact.phoneHref}>
            {contact.phone}
          </a>
          <a className="btn btn-primary site-header__cta" href={homeHash('booking')}>
            Забронировать
          </a>
          <button
            type="button"
            className="menu-toggle"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">{open ? 'Закрыть меню' : 'Открыть меню'}</span>
            <span />
            <span />
          </button>
        </div>
      </div>

      <div id="mobile-nav" className={`mobile-nav ${open ? 'is-open' : ''}`}>
        <nav aria-label="Мобильная навигация">
          {links.map((l) => (
            <a key={l.hash} href={homeHash(l.hash)} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <NavLink to="/quests" onClick={() => setOpen(false)}>
            Все игры
          </NavLink>
          <a href={contact.vk} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
            Сообщество VK
          </a>
          <a className="btn btn-primary" href={contact.phoneHref}>
            Позвонить
          </a>
        </nav>
      </div>
    </header>
  );
}
