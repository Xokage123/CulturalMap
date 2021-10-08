// Next
import Link from 'next/link';
import type { InferGetStaticPropsType, GetStaticPaths } from 'next';
import { NextRouter, useRouter } from 'next/router';
import dynamic from 'next/dynamic';
// React
import { useState, useMemo } from 'react';
import uuid from 'react-uuid';
// Router
import routes from 'routes';
// Components
import { Map } from 'components/Map';
import { MyList } from '@/components/MyList';
import { MyLink } from '@/components/MyLink';
// Data
import { arrayPathsRouting } from 'data/persons';
import { NULLInfo, CLASS_PLACE_INFO } from 'data/map';
import { sxButtonClose } from 'data/Buttons';
import * as SX_MAP from 'data/Buttons/map';
// Api
import { getMapInfo } from 'API/map';
// Interface
import type { ICoordinate } from 'interfaces/interface/map';
// Style__Material
import Button from '@mui/material/Button';
import PersonIcon from '@mui/icons-material/Person';
// Styles__MY
import styles from 'styles/map/index.module.scss';
import { SxProps } from '@mui/material/node_modules/@mui/system';

const CreateLayer = dynamic(
	() => {
		return import('API/leaflet');
	},
	{
		ssr: false,
	}
);

const createContent = (element: JSX.Element) => {
	return <div key={uuid()}>{element}</div>;
};

const InformationAboutMap = (
	props: InferGetStaticPropsType<typeof getStaticProps>
) => {
	const [personInfo, setPersonInfo] = useState<ICoordinate>(() => {
		return props.personInfo ? JSON.parse(props.personInfo) : NULLInfo;
	});
	const router: NextRouter = useRouter();

	const arrayTopNavigate: Array<JSX.Element> = useMemo(() => {
		return [
			// Кнопка назад
			<Button
				key={uuid()}
				sx={sxButtonClose}
				onClick={() => router.back()}
				variant="contained"
				color="error"
			>
				Назад
			</Button>,
			// Ссылка на страницу с информацией
			<MyLink
				key={uuid()}
				url={`${routes.person.path}/${personInfo.initial}`}
				content={
					<Button variant="contained" className={styles[`Navigate-Link`]}>
						<PersonIcon /> Информация
					</Button>
				}
			/>,
		];
	}, [personInfo.initial, router]);

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	return (
		<>
			{/* Лист с навигацией */}
			<MyList
				styleList={SX_MAP.maps_SX_ListNavigate}
				styleItem={SX_MAP.maps_SX_ItemNavigate}
				elements={arrayTopNavigate}
				functionCreateContent={createContent}
			/>
			{/* Секция с картой */}
			<section className={styles[`Map-Container`]}>
				<Map
					arrayPlaceInfo={personInfo.information}
					DynamicElement={CreateLayer}
				/>
				<section className={CLASS_PLACE_INFO}></section>
			</section>
		</>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: arrayPathsRouting,
		fallback: true,
	};
};
export const getStaticProps = async ({ params }: any) => {
	try {
		const personInfo: ICoordinate = await getMapInfo(params.name);
		return {
			props: {
				personInfo: JSON.stringify(personInfo),
			},
		};
	} catch (er) {
		return {
			props: {
				personInfo: JSON.stringify(NULLInfo),
			},
		};
	}
};

export default InformationAboutMap;
