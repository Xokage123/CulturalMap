import { ComponentType } from 'react';
// Interface
import type { IMapProps } from 'interfaces/interface/map';
import styles from './map.module.scss';

export const Map: React.FC<IMapProps> = (props) => {
	const { DynamicElement } = props;
	return (
		<>
			<div id={styles.Map}></div>
			<DynamicElement nameContainer={styles.Map} />
		</>
	);
};
