// Enum
import {
  PersonInitial,
  RUS_PersonInitial,
  LivePeriod,
  RUS_LivePeriod,
} from 'interfaces/enum/person';
import { PlaceName } from 'interfaces/enum/map';
// Interface
import { ICoordinate } from 'interfaces/interface/map';

// Начальные параметры для карты
export const ZOOM = 10;

// Класс контйнера с информацией о месте
export const CLASS_PLACE_INFO = 'placeInfo';

export const NULLInfo: ICoordinate = {
  // Инциалы
  initial: '',
  // Инциалы на русском
  RUS_initial: '',
  // Информация
  information: [],
};

// Жизненный путь карамзина
export const coordinateKaramzin: ICoordinate = {
  initial: PersonInitial.KARAMZIN,
  RUS_initial: RUS_PersonInitial.KARAMZIN,
  information: [
    {
      period: LivePeriod.CHILDHOOD,
      RUS_period: RUS_LivePeriod.CHILDHOOD,
      century: 99,
      years: [1766, 1778],
      place: PlaceName.Mikhailovka,
      description: 'Родился в деревне Денисовка (ныне село Ломоносово)',
    },
  ],
};

export const coordinateLomonosov: ICoordinate = {
  // Инциалы
  initial: PersonInitial.LOMONOSOV,
  // Инциалы на русском
  RUS_initial: RUS_PersonInitial.LOMONOSOV,
  // Информация
  information: [
    {
      period: LivePeriod.CHILDHOOD,
      RUS_period: RUS_LivePeriod.CHILDHOOD,
      century: 18,
      years: [1711, 1729],
      place: PlaceName.Lomonosovo,
      description:
        'Детство в селе Михайловка Бузулукского уезда Симбирской губернии',
    },
  ],
};

// Все координаты
export const arrayAllCoordinatesPerson: Array<ICoordinate> = [
  coordinateKaramzin,
  coordinateLomonosov,
];
