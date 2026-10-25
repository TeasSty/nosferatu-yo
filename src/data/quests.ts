import type { LocationId } from './locations';

export type QuestCategory =
  | 'horror'
  | 'kids'
  | 'outdoor'
  | 'party'
  | 'lounge'
  | 'alt';

export interface Quest {
  id: string;
  title: string;
  category: QuestCategory;
  locationId: LocationId;
  image: string;
  synopsis: string;
  age?: string;
  duration?: string;
  players?: string;
  priceFrom?: string;
  priceNote?: string;
  modes?: string[];
  features?: string[];
  altOf?: string;
  alts?: string[];
  status: 'active' | 'confirm';
  featured?: boolean;
}

/** Only confirmed fields from public sources (mir-kvestov, clients.site, VK, 2GIS). */
export const quests: Quest[] = [
  {
    id: 'astral-nevesta',
    title: 'Астрал. Невеста',
    category: 'horror',
    locationId: 'mash',
    image: '/images/quests/astral-nevesta.jpg',
    synopsis:
      'Молодая невеста Дженнифер исчезла за несколько дней до свадьбы. Единственная улика ведёт в квартиру неизвестной женщины Мэрилин. Помогите найти подсказку — пока тьма не закроет дверь.',
    age: 'режимы от 12+ / 18+',
    duration: '60 мин',
    players: '2–9',
    priceFrom: 'от 3 900 ₽',
    priceNote: 'команда 2–6 чел.; доп. игрок +500 ₽; предоплата 500 ₽',
    modes: [
      'Без актёров (12+, больше загадок)',
      'Лайт (12+) — сюжетный контакт',
      'Ультра (18+) — полное погружение, безопасный контакт',
    ],
    features: [
      'Площадь перформанса ~300 м²',
      'Альтернативные сценарии на той же локации',
    ],
    alts: ['mara', 'granny', 'rozhdestvo'],
    status: 'active',
    featured: true,
  },
  {
    id: 'zaklyatie',
    title: 'Заклятие',
    category: 'horror',
    locationId: 'baum',
    image: '/images/quests/zaklyatie.jpg',
    synopsis:
      '1971 год, Энфилд. Церковь получает десятки свидетельств о доме семьи Ходжсон: чужой голос у ребёнка, шаги в пустых комнатах, ощущение чужого взгляда. Вас отправляют выяснить природу происходящего и остановить это.',
    age: 'режимы 10+ / 18+',
    duration: '60 мин',
    players: '2–7',
    priceFrom: 'от 4 500 ₽',
    priceNote: 'команда 2–6 чел.; доп. игрок +500 ₽; предоплата 500 ₽',
    modes: [
      'Лайт (10+) — сюжетный контакт',
      'Ультра (18+) — безопасный физический контакт',
    ],
    features: [
      'Костюмы на заказ',
      'Актёрские перевоплощения с эффектами телепортации',
      'Звук и свет, проработанная декорация',
    ],
    status: 'active',
    featured: true,
  },
  {
    id: 'sinister',
    title: 'Синистер',
    category: 'horror',
    locationId: 'mash',
    image: '/images/quests/sinister.jpg',
    synopsis:
      'Семья переезжает в дом, где год назад произошла трагедия. Видеозаписи обещают разгадку — и запускают новую волну ужаса. Несколько актёров, механизмы и игровая площадь в стиле небольшого города.',
    age: 'режимы от 14+ / 18+',
    duration: '60 мин',
    players: '2–7',
    priceFrom: 'от 4 500 ₽',
    priceNote: 'уточняйте актуальный тариф при записи',
    features: [
      '4 главных персонажа',
      'Несколько актёров и уровней страха',
      'Есть логическая версия «Последний свидетель»',
    ],
    alts: ['momo', 'rozhdestvo'],
    status: 'active',
    featured: true,
  },
  {
    id: 'pischeblok',
    title: 'Пищеблок',
    category: 'horror',
    locationId: 'perv',
    image: '/images/quests/pischeblok.jpg',
    synopsis:
      'Лето 1979-го, лагерь «Буревестник». После отбоя пионеры уходят к заброшенному корпусу — пищеблоку. Год спустя новая смена может разгадать секрет… или повторить чужую ошибку.',
    age: 'режимы 12+ / 18+',
    duration: '60 мин',
    players: '2–9',
    priceFrom: 'от 4 500 ₽',
    priceNote: 'команда 2–6 чел.; доп. игрок +500 ₽',
    modes: ['Лайт (12+)', 'Ультра (18+)'],
    alts: ['myers'],
    status: 'active',
    featured: true,
  },
  {
    id: 'momo',
    title: 'Момо: проклятый город',
    category: 'alt',
    locationId: 'mash',
    image: '/images/quests/momo.jpg',
    synopsis:
      'Альтернативный сценарий на локации «Синистер». История о женщине, потерявшей ребёнка, и обмене, который превратил её в пленницу колдуньи — теперь она бродит по городу.',
    age: 'режимы 12+ / 18+',
    duration: '60 мин',
    players: '2–7',
    priceFrom: 'от 3 900 ₽',
    altOf: 'sinister',
    status: 'active',
  },
  {
    id: 'myers',
    title: 'Дом Майкла Майерса',
    category: 'alt',
    locationId: 'perv',
    image: '/images/quests/myers.jpg',
    synopsis:
      'Альтернативный сценарий на локации «Пищеблок». Хэллоуинская ночь в Хэддонфилде: школьники изучают историю Майкла Майерса и ищут способ остановить зло.',
    age: 'режимы 12+ / 18+',
    duration: '60 мин',
    players: '2–7',
    priceFrom: 'от 4 500 ₽',
    altOf: 'pischeblok',
    status: 'active',
  },
  {
    id: 'iskateli',
    title: 'Искатели могил',
    category: 'horror',
    locationId: 'perv',
    image: '/images/quests/iskateli.jpg',
    synopsis:
      'Хоррор-перформанс на Первомайской. Подробности сюжета и актуальные условия — при записи в VK или по телефону.',
    age: 'от 12+',
    duration: '60 мин',
    players: '2–7',
    priceFrom: 'от 3 900 ₽',
    status: 'confirm',
  },
  {
    id: 'poslednyaya-smena',
    title: 'Последняя смена',
    category: 'horror',
    locationId: 'perv',
    image: '/images/quests/poslednyaya-smena.jpg',
    synopsis:
      'Перформанс повышенной страшности. Состав команды, режим и стоимость подтверждайте при бронировании.',
    age: 'уточнять',
    duration: '60 мин',
    players: '2–7',
    priceFrom: 'от 3 900 ₽',
    status: 'confirm',
  },
  {
    id: 'granny',
    title: 'Гренни / Старуха в чёрном',
    category: 'alt',
    locationId: 'mash',
    image: '/images/quests/staruha.jpg',
    synopsis:
      'Вы очнулись в старом доме — ловушка уже захлопнулась. Альтернативный сценарий на площадке Машиностроителей.',
    age: 'режимы 12+ / 18+',
    duration: '60 мин',
    players: '2–7',
    priceFrom: 'от 3 900 ₽',
    status: 'confirm',
  },
  {
    id: 'rozhdestvo',
    title: 'Ужасающее Рождество',
    category: 'alt',
    locationId: 'mash',
    image: '/images/quests/rozhdestvo.jpg',
    synopsis:
      'Семейный сбор в ожидании Санты… Альтернативный сезонный сценарий. Доступность и даты — только по записи.',
    age: 'режимы 12+ / 18+',
    duration: '60–90 мин',
    players: '2–7',
    priceFrom: 'от 4 900 ₽',
    status: 'confirm',
  },
  {
    id: 'sherlock',
    title: 'Тайна Шерлока',
    category: 'kids',
    locationId: 'mash',
    image: '/images/quests/sherlock.jpg',
    synopsis:
      'Детский квест-проект: помогите Шерлоку разгадать тайную пропажу детских подарков. Формат дружелюбнее хоррор-линейки.',
    status: 'confirm',
  },
  {
    id: 'pryatki',
    title: 'NOSFERATU Прятки',
    category: 'kids',
    locationId: 'mash',
    image: '/images/quests/pryatki.jpg',
    synopsis:
      'Не детские «туки-туки»: играйте друг против друга на площадке проекта. Состав, возраст и правила — при записи.',
    status: 'confirm',
  },
];

export const categories = [
  {
    id: 'horror',
    title: 'Хоррор с актёрами',
    lead: 'Кинематографичные перформансы: сюжет, декорации и живой контакт.',
    href: '#horror',
    image: '/images/quests/astral-nevesta.jpg',
    tone: 'dark' as const,
  },
  {
    id: 'kids',
    title: 'Детские приключения',
    lead: 'Шерлок, прятки и программы без кровавой эстетики взрослых хорроров.',
    href: '#other',
    image: '/images/quests/sherlock.jpg',
    tone: 'warm' as const,
  },
  {
    id: 'outdoor',
    title: 'Выездные логические',
    lead: 'Квесты «в коробке» и выездные форматы — уточняйте актуальный ассортимент в VK.',
    href: '#other',
    image: '/images/gallery/poster2.jpg',
    tone: 'graphite' as const,
  },
  {
    id: 'party',
    title: 'Праздники и анимация',
    lead: 'Дни рождения, тематические программы и анимация под запрос.',
    href: '#other',
    image: '/images/gallery/g6.jpg',
    tone: 'warm' as const,
  },
  {
    id: 'lounge',
    title: 'NOSFERATU Lounge',
    lead: 'Пространство для вечеринок и мероприятий — до 30 человек на Машиностроителей.',
    href: '#lounge',
    image: '/images/lounge/lounge1.jpg',
    tone: 'graphite' as const,
  },
] as const;

export function getQuest(id: string) {
  return quests.find((q) => q.id === id);
}

export const horrorQuests = quests.filter(
  (q) => q.category === 'horror' || (q.category === 'alt' && q.featured !== false),
);

export const mainHorror = quests.filter((q) =>
  ['astral-nevesta', 'zaklyatie', 'sinister', 'pischeblok'].includes(q.id),
);

export const altQuests = quests.filter((q) => q.category === 'alt');
export const kidsQuests = quests.filter((q) => q.category === 'kids');
