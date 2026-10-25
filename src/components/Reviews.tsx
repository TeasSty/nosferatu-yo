import { reviews } from '../data/reviews';
import './Reviews.css';

export function Reviews() {
  return (
    <section id="reviews" className="reviews">
      <div className="container reviews__head">
        <p className="eyebrow">Секция 07</p>
        <h2 className="section-title">Отзывы</h2>
        <p className="section-lead">
          Реальные цитаты из публичных отзывов. Текст не переписывался по смыслу.
        </p>
      </div>
      <div className="reviews__track">
        {reviews.map((r) => (
          <blockquote key={`${r.author}-${r.text.slice(0, 24)}`} className="review-card">
            <p>«{r.text}»</p>
            <footer>
              <cite>{r.author}</cite>
              <span>
                {r.source}
                {r.about ? ` · ${r.about}` : ''}
              </span>
            </footer>
          </blockquote>
        ))}
      </div>
    </section>
  );
}
