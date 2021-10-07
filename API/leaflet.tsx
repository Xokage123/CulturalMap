// Leaflet
import L from 'leaflet';
// React
import { useEffect } from 'react';
// Api
import { getInfoPlace } from 'API/yandex';
// Interface
import type { IDynamicProps } from 'interfaces/interface/map';

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

let map: L.Map;

const Component = (props: IDynamicProps) => {
	const { mapConfig, arrayPlaceInfo, nameContainer, namePopup } = props;
	useEffect(() => {
		getInfoPlace(arrayPlaceInfo[0].place).then((answer) => {
			const coordinatePlace = answer.Point.pos.split(' ');
			map = L.map(nameContainer, mapConfig).setView(coordinatePlace);
			const marker: L.Marker = L.marker(coordinatePlace)
				.bindPopup(`${document.querySelector(`.${namePopup}`)?.innerHTML}`)
				.addTo(map);
			createLayer(
				`${process.env.NEXT_PUBLIC_BASEURL_MAPBOX}${process.env.NEXT_PUBLIC_ID_CULTURAL_MAP}`
			).addTo(map);
		});
		return () => {
			map ? map.remove() : null;
		};
	}, [arrayPlaceInfo, mapConfig, nameContainer, namePopup]);

	return <></>;
};

export default Component;
