import * as Person from 'interfaces/enum/person';

// Название периода
export type TNamePeriod =
  | ''
  | Person.LivePeriod.ALL
  | Person.LivePeriod.CHILDHOOD
  | Person.LivePeriod.YOUTH;
// Название периода на русском
export type TRUS_NamePeriod =
  | ''
  | Person.RUS_LivePeriod.ALL
  | Person.RUS_LivePeriod.CHILDHOOD
  | Person.RUS_LivePeriod.YOUTH;
// Название направлений
export type TNameDirections =
  | ''
  | Person.NameDirections.HISTORY
  | Person.NameDirections.LITERATURE
  | Person.NameDirections.PAINTING
  | Person.NameDirections.SCIENCE;

export type TRUS_NameDirections =
  | ''
  | Person.RUS_NameDirections.HISTORY
  | Person.RUS_NameDirections.LITERATURE
  | Person.RUS_NameDirections.PAINTING
  | Person.RUS_NameDirections.SCIENCE;
// Типы контента
export type TPersonContent = 'video' | 'article';
