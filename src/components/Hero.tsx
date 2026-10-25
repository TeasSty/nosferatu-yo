import { motion, useReducedMotion } from 'framer-motion';
import { contact } from '../data/contact';
import { asset, homeHash } from '../lib/paths';
import './Hero.css';

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="hero" aria-label="NOSFERATU — главный экран">
      <div className="hero__media" aria-hidden="true">
        <motion.img
          src={asset('images/hero/hero-1.jpg')}
          alt=""
          className="hero__img"
          initial={reduce ? false : { scale: 1.08 }}
          animate={reduce ? undefined : { scale: 1 }}
          transition={{ duration: 12, ease: 'linear' }}
        />
        <div className="hero__shade" />
        <div className="hero__vignette" />
      </div>

      <div className="hero__content container">
        <motion.p
          className="eyebrow hero__eyebrow"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
        >
          {contact.city} · хоррор-перформансы
        </motion.p>

        <motion.h1
          className="hero__title"
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>NOSFERATU</span>
        </motion.h1>

        <motion.p
          className="hero__tagline"
          initial={reduce ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
        >
          {contact.tagline}
        </motion.p>

        <motion.div
          className="hero__actions"
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.58 }}
        >
          <a className="btn btn-primary" href={homeHash('adventures')}>
            Выбрать приключение
          </a>
          <a className="btn btn-ghost" href={homeHash('booking')}>
            Забронировать
          </a>
        </motion.div>

        <motion.p
          className="hero__note"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.75 }}
        >
          {contact.bookingNote} · три площадки в городе
        </motion.p>
      </div>

      <a className="hero__scroll" href={homeHash('adventures')} aria-label="К выбору приключений">
        <span />
      </a>
    </section>
  );
}
