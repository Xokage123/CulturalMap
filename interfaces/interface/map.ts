import { ComponentType } from 'react';

export interface IDynamicProps {
  nameContainer: string;
}

export interface IMapProps {
  DynamicElement: ComponentType<IDynamicProps>;
}
