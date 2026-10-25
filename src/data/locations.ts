export type LocationId = 'mash' | 'perv' | 'baum';

export interface Location {
  id: LocationId;
  name: string;
  address: string;
  shortAddress: string;
  hours: string;
  hoursNote?: string;
  landmark?: string;
  features: string[];
}

export const locations: Location[] = [
  {
    id: 'mash',
    name: 'Машиностроителей',
    address: 'ул. Машиностроителей, 2А, 2 этаж',
    shortAddress: 'Машиностроителей, 2А',
    hours: 'ежедневно 10:00–02:00',
    hoursNote: 'по предварительной записи',
    landmark: '1 минута от остановки «Депо»',
    features: [
      'Хоррор-перформансы с актёрами',
      'Гостевая зона до 30 человек',
      '2 зоны для праздников (от 990 ₽/час)',
      'Бесплатная парковка, Wi‑Fi',
    ],
  },
  {
    id: 'perv',
    name: 'Первомайская',
    address: 'ул. Первомайская, 164, вход со двора',
    shortAddress: 'Первомайская, 164',
    hours: 'ежедневно 10:00–02:00',
    hoursNote: 'по предварительной записи',
    landmark: 'остановка «Ленинский проспект»',
    features: [
      'Хоррор-перформансы',
      'Зона для праздников (до 20 человек)',
      'Бесплатная парковка, Wi‑Fi',
    ],
  },
  {
    id: 'baum',
    name: 'Баумана',
    address: 'ул. Баумана, 11Б, цокольный этаж',
    shortAddress: 'Баумана, 11Б',
    hours: 'ежедневно с 10:00',
    hoursNote:
      'по предварительной записи; ориентир окончания — до 22:00 (уточняйте при бронировании)',
    landmark: 'остановка «Березово», со стороны «Вкусно — и точка»',
    features: [
      'Перформанс «Заклятие»',
      'Гостевая зона до 7 человек',
      'Бесплатная парковка, Wi‑Fi',
    ],
  },
];

export function getLocation(id: LocationId) {
  return locations.find((l) => l.id === id)!;
}
