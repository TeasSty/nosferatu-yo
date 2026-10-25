export interface GalleryItem {
  src: string;
  alt: string;
  span?: 'wide' | 'tall' | 'normal';
}

export const gallery: GalleryItem[] = [
  { src: '/images/hero/hero-1.jpg', alt: 'Атмосфера NOSFERATU', span: 'wide' },
  { src: '/images/gallery/g3.jpg', alt: 'Сцена перформанса', span: 'tall' },
  { src: '/images/gallery/poster2.jpg', alt: 'Афиша проекта' },
  { src: '/images/gallery/g1.jpg', alt: 'Декорации квеста' },
  { src: '/images/gallery/g4.jpg', alt: 'Игровой момент', span: 'wide' },
  { src: '/images/gallery/poster3.jpg', alt: 'Тематический постер' },
  { src: '/images/gallery/g5.jpg', alt: 'Актёрская сцена' },
  { src: '/images/lounge/lounge1.jpg', alt: 'Lounge-пространство', span: 'wide' },
  { src: '/images/gallery/g2.jpg', alt: 'Интерьер площадки' },
  { src: '/images/gallery/g6.jpg', alt: 'Мероприятие NOSFERATU' },
  { src: '/images/lounge/lounge2.jpg', alt: 'Зона для праздников' },
  { src: '/images/gallery/g8.jpg', alt: 'Кадр из перформанса', span: 'tall' },
  { src: '/images/gallery/g7.jpg', alt: 'Атмосферный кадр' },
];
