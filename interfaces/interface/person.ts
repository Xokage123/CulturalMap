import type {
  TNamePeriod,
  TRUS_NamePeriod,
  TNameDirections,
  TRUS_NameDirections,
} from 'interfaces/type/person';

export interface IPersonInformation {
  error?: boolean;
  // Инициалы
  initial: string;
  // Инициалы на русском
  RUS_initial: string;
  // Информация
  infarmation: Array<ILiveInformationPerson>;
  // Направления
  working: Array<TNameDirections>;
  // Направления на русском
  RUS_working: Array<TRUS_NameDirections>;
  // Век
  century: Array<number>;
  // Фотографии
  photos: Array<StaticImageData>;
}

// Информация о периодах жизни
export interface ILiveInformationPerson {
  // Название периода
  period: TNamePeriod;
  // Название периода на русском
  RUS_period: TRUS_NamePeriod;
  // Информация
  information: Array<string>;
}
