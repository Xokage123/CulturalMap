// Next
import type { InferGetStaticPropsType, GetStaticPaths } from 'next';
import { useRouter, NextRouter } from 'next/router';
// React
import { useMemo, useState } from 'react';
import uuid from 'react-uuid';
// Router
import routes from 'routes';
// Interace
import type {
	IPersonInformation,
	ILiveInformationPerson,
	IPersonContent,
} from 'interfaces/interface/person';
// Data
import { arrayPathsRouting, NULLObjectPerson } from 'data/persons';
import * as SX_MAP from 'data/Buttons/map';
// Api
import { getPerson } from 'API/persons';
// Components
import { MySwiper } from 'components/MySwiper';
import { MyList } from '@/components/MyList';
import { MyLink } from '@/components/MyLink';
// Style__Material
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Button from '@material-ui/core/Button';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MapIcon from '@mui/icons-material/Map';

const createContentNavigationTop = (element: any) => {
	return element;
};

const createContentLivePerson = (element: ILiveInformationPerson) => {
	return (
		<span key={uuid()}>
			<Typography variant="h5" gutterBottom>
				{element.RUS_period}
			</Typography>
			<Typography variant="body2" gutterBottom>
				{element.information}
			</Typography>
		</span>
	);
};

const createContentAchievements = (element: string) => {
	return element;
};

const InformationAboutPerson = (
	props: InferGetStaticPropsType<typeof getStaticProps>
) => {
	// Информация
	const [personInfo, setPersonInfo] = useState<IPersonInformation>(() => {
		return props.personInfoJson
			? JSON.parse(props.personInfoJson)
			: NULLObjectPerson;
	});

	const router: NextRouter = useRouter();

	const elementsNavigationTop: Array<JSX.Element> = useMemo(() => {
		return [
			// Кнопка назад
			<Button
				key={uuid()}
				onClick={() => router.back()}
				variant="outlined"
				color="error"
			>
				Назад
			</Button>,
			// Ссылка на страницу с информацией
			<MyLink
				key={uuid()}
				url={`${routes.map.path}/${personInfo.initial}`}
				content={
					<Button variant="contained">
						<MapIcon /> Карта
					</Button>
				}
			/>,
		];
	}, []);

	if (router.isFallback) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<MyList
				elements={elementsNavigationTop}
				functionCreateContent={createContentNavigationTop}
				styleList={SX_MAP.maps_SX_ListNavigate}
				styleItem={SX_MAP.maps_SX_ItemNavigate}
			/>
			{/* Направления и года жизни */}
			{personInfo.RUS_working.map((work: string) => {
				return (
					<Typography
						key={uuid()}
						variant="caption"
						display="block"
						gutterBottom
					>
						{work}
						{personInfo.century.length > 1
							? `${personInfo.century[0]}-${personInfo.century[1]} века`
							: `${personInfo.century[0]} век`}
					</Typography>
				);
			})}
			{/* Инициалы */}
			<Typography variant="h3" gutterBottom>
				{personInfo.RUS_initial}
			</Typography>
			{/* Свайпер фотографий */}
			<MySwiper photos={personInfo.photos} />
			{/* Аккордион с контентом */}
			<Accordion>
				<AccordionSummary
					expandIcon={<ExpandMoreIcon />}
					aria-controls="panel1a-content"
					id="panel1a-header"
				>
					<Typography>Видео материалы</Typography>
				</AccordionSummary>
				{personInfo.content
					? personInfo.content.map((element: IPersonContent) => {
							return (
								<AccordionDetails key={uuid()}>
									<Typography>
										<iframe
											width="560"
											height="315"
											src={element.url}
											title="YouTube video player"
											frameBorder="0"
											allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
											allowFullScreen
										></iframe>
									</Typography>
								</AccordionDetails>
							);
					  })
					: null}
			</Accordion>
			{/* Основные достижения человека */}
			<MyList
				title="Основные достижения"
				elements={personInfo.achievements}
				functionCreateContent={createContentAchievements}
				styleItem={{
					border: '1px solid black',
					padding: '20px',
				}}
				styleList={{
					fontWeight: 700,
					display: 'grid',
					gap: '20px',
				}}
			/>
			{/* Жизнь человека */}
			<MyList
				title="Текстовая информация"
				elements={personInfo.infarmation}
				functionCreateContent={createContentLivePerson}
				styleItem={{}}
				styleList={{}}
			/>
		</div>
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
		const personInfo: IPersonInformation = await getPerson(params.name);
		return {
			props: {
				personInfoJson: JSON.stringify(personInfo),
			},
		};
	} catch (er) {
		return {
			props: {
				personInfoJson: JSON.stringify(NULLObjectPerson),
			},
		};
	}
};

export default InformationAboutPerson;
