// Leaflet
import L from 'leaflet';
// React
import { useEffect } from 'react';
// Api
import { getInfoPlace } from 'API/yandex';
// Config
import { startConfigIcon } from 'MyConfigs/leaflet';
// Utils
import { generateContentOnPlace, generateContentForPopup } from 'utils/map';
// Interface
import type {
	IDynamicProps,
	IMarkerProps,
	IMapInformation,
} from 'interfaces/interface/map';
// Types
import type { TAddMarkerWithPopupToMap } from 'interfaces/type/map';

// Массив маркеров
const arrayMarker: Array<L.Marker> = [];

// Создание слоя
const createLayer = (url: string) => {
	return L.tileLayer(
		`${url}/tiles/{z}/{x}/{y}?access_token=${process.env.NEXT_PUBLIC_MAPBOX_TOKEN}`,
		{
			id: url,
			accessToken: process.env.NEXT_PUBLIC_MAPBOX_TOKEN,
		}
	);
};
// Добавление маркера на конкретные координат
const addMarkerWithPopupToMap: TAddMarkerWithPopupToMap = ({
	content,
	map,
	coordinate,
	popupContent,
	config,
	clickCallbak,
}) => {
	if (map) {
		// Создаем маркет
		const marker = L.marker(coordinate, config);
		// Привязываем popup
		marker.bindPopup(popupContent);
		// Добавляем маркер в массив
		arrayMarker.push(marker);
		clickCallbak.forEach((callbak) => {
			marker.addEventListener('click', (ev) => {
				callbak(content);
			});
		});
		// Добавляем к нужной нам карте
		marker.addTo(map);
	}
};
// Стартовая конфигурация для маркера
const startConfigMarker: L.MarkerOptions = {
	icon: L.icon(startConfigIcon),
};

let map: L.Map;

const Component = (props: IDynamicProps) => {
	const { mapConfig, arrayPlaceInfo, nameContainer, namePopup } = props;
	useEffect(() => {
		arrayPlaceInfo.forEach((element, index) => {
			getInfoPlace(element.place).then((answer) => {
				const coordinatePlace = answer.Point.pos.split(' ');
				generateContentForPopup(namePopup, element);
				if (index === 0) {
					map = L.map(nameContainer, mapConfig).setView(coordinatePlace);
					createLayer(
						`${process.env.NEXT_PUBLIC_BASEURL_MAPBOX}${process.env.NEXT_PUBLIC_ID_CULTURAL_MAP}`
					).addTo(map);
				}

				const popupContainer = document.querySelector(`.${namePopup}`);

				// Параметры для создания маркера
				const propsMarker: IMarkerProps = {
					// Контент
					content: element,
					// Карта
					map,
					// Координаты
					coordinate: coordinatePlace,
					// Текст для popup
					popupContent: popupContainer ? popupContainer.innerHTML : '',
					// Конфигурация для маркера
					config: startConfigMarker,
					clickCallbak: [generateContentOnPlace],
				};
				popupContainer && propsMarker
					? addMarkerWithPopupToMap(propsMarker)
					: null;
			});
		});
		return () => {
			map ? map.remove() : null;
		};
	}, [arrayPlaceInfo, mapConfig, nameContainer, namePopup]);

	return <></>;
};

export default Component;
