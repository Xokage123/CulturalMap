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
  initial: '',
  RUS_initial: '',
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
      description:
        'Детство в селе Михайловка Бузулукского уезда Симбирской губернии',
    },
  ],
};

// Все координаты
export const arrayAllCoordinatesPerson: Array<ICoordinate> = [
  coordinateKaramzin,
];
