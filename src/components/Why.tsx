import { whyPoints } from '../data/why';
import './Why.css';

export function Why() {
  return (
    <section id="why" className="why">
      <div className="container why__layout">
        <div className="why__intro">
          <p className="eyebrow">Секция 06</p>
          <h2 className="section-title">Почему NOSFERATU</h2>
          <p className="section-lead">
            Не слоганы «для каждого», а то, что реально отличает проект по открытым материалам.
          </p>
        </div>
        <ol className="why__list">
          {whyPoints.map((p, i) => (
            <li key={p.title}>
              <span>{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
