// Interface
import type { IMapProps } from 'interfaces/interface/map';
// Config
import { startConfigForMap } from 'MyConfigs/leaflet';
// Utils
import { generateContentForPopup } from 'utils/map';
// Styles__Materail
import { blue } from '@mui/material/colors';
// Styles__My
import styles from './map.module.scss';

export const Map: React.FC<IMapProps> = (props) => {
	const { DynamicElement, arrayPlaceInfo } = props;
	const gerenareContent = () => {
		if (arrayPlaceInfo.length) {
			return (
				<>
					<div
						style={{
							border: `2px solid ${blue[500]}`,
						}}
						id={styles.Map}
					></div>
					{generateContentForPopup(styles.Popup, arrayPlaceInfo[0])}
					<DynamicElement
						arrayPlaceInfo={arrayPlaceInfo}
						mapConfig={startConfigForMap}
						nameContainer={styles.Map}
						namePopup={styles.Popup}
					/>
				</>
			);
		}
		return <div>Loading...</div>;
	};
	return <>{gerenareContent()}</>;
};
