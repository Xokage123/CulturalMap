import type {
  TNamePeriod,
  TRUS_NamePeriod,
  TNameDirections,
  TRUS_NameDirections,
  TPersonContent,
} from 'interfaces/type/person';

//

// Интерфейс дополнительного контента
export interface IPersonContent {
  type: TPersonContent;
  url: string;
}

// Информация о личности
export interface IPersonInformation {
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
  // Основные достижения
  achievements: Array<string>;
  // Век
  century: Array<number>;
  // Фотографии
  photos: Array<StaticImageData>;
  // Контент
  content: Array<IPersonContent>;
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
