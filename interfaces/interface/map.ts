// Interface
import { ComponentType } from 'react';
// Types
import type { TNamePeriod, TRUS_NamePeriod } from 'interfaces/type/person';
import type { TNamePlace } from 'interfaces/type/map';

export interface IDynamicProps {
  mapConfig: L.MapOptions;
  arrayPlaceInfo: Array<IMapInformation>;
  nameContainer: string;
  namePopup: string;
}

// Входные параметры для создания карты
export interface IMapProps {
  DynamicElement: ComponentType<IDynamicProps>;
  arrayPlaceInfo: Array<IMapInformation>;
}

// Информация для карты
export interface IMapInformation {
  // Период прибывания
  period: TNamePeriod;
  // Название периода на русском
  RUS_period: TRUS_NamePeriod;
  // Век
  century: number;
  // Года
  years: Array<number>;
  // Название места
  place: TNamePlace;
  // Краткое описание места
  description: string;
}
// Информация для массива координат
export interface ICoordinate {
  initial: string;
  RUS_initial: string;
  information: Array<IMapInformation>;
}
