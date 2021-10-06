// Leaflet
import L from 'leaflet';
// React
import { useEffect } from 'react';
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

const Component = (props: IDynamicProps) => {
	const { nameContainer } = props;
	useEffect(() => {
		const map = L.map(nameContainer, {
			center: [51.505, -0.09],
			zoom: 13,
		});
		createLayer(
			`${process.env.NEXT_PUBLIC_BASEURL_MAPBOX}${process.env.NEXT_PUBLIC_ID_CULTURAL_MAP}`
		).addTo(map);
		return () => {
			map.remove();
		};
	}, [nameContainer]);

	return <></>;
};

export default Component;
