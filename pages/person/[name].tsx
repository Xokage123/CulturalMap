// Next
import type { InferGetStaticPropsType, GetStaticPaths } from 'next';
import { useRouter, NextRouter } from 'next/router';
// React
import uuid from 'react-uuid';
// Interace
import type {
	IPersonInformation,
	ILiveInformationPerson,
} from 'interfaces/interface/person';
// Enum
import { PlaceName } from 'interfaces/enum/map';
// Data
import { arrayPathsRouting } from 'data/persons';
// Api
import { getPerson } from 'API/persons';
import { getInfoPlace } from 'API/yandex';
// Components
import { MySwiper } from 'components/MySwiper';
// Style__Material
import Button from '@material-ui/core/Button';
import Typography from '@mui/material/Typography';

// import KARAMZIN_PHOTO_1 from 'public/photo/person/karamzin/1.jpg';
// import KARAMZIN_PHOTO_2 from 'public/photo/person/karamzin/2.jpg';
// import KARAMZIN_PHOTO_3 from 'public/photo/person/karamzin/3.jpg';

const InformationAboutPerson = (
	props: InferGetStaticPropsType<typeof getStaticProps>
) => {
	const { personInfo } = props;
	console.log(personInfo);

	const router: NextRouter = useRouter();

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	const testFunc = () => {
		getInfoPlace(PlaceName.Mikhailovka);
	};

	return (
		<div>
			<Button onClick={() => router.back()} variant="outlined" color="error">
				Назад
			</Button>
			<Button onClick={() => testFunc()} variant="outlined" color="error">
				Геокодер Яндекса
			</Button>
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
			<Typography variant="h3" gutterBottom>
				{personInfo.RUS_initial}
			</Typography>
			<MySwiper photos={personInfo.photos} />
			<Typography variant="h4" gutterBottom>
				Текстовая информация
			</Typography>
			<span>
				{JSON.parse(personInfo.infarmation).map(
					(element: ILiveInformationPerson) => {
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
					}
				)}
			</span>
		</div>
	);
};

export const getStaticPaths: GetStaticPaths = async () => {
	return {
		paths: arrayPathsRouting,
		fallback: true,
	};
};

const testFunction = (object: any) => {
	return {
		name: 'test',
		value: object,
	};
};

export const getStaticProps = async ({ params }: any) => {
	try {
		const personInfo: IPersonInformation = await getPerson(params.name);
		return {
			props: {
				personInfo: {
					...personInfo,
					infarmation: JSON.stringify(personInfo.infarmation),
				},
			},
		};
	} catch (er) {
		return {
			props: {
				personInfo: {
					initial: '',
					RUS_initial: '',
					infarmation: '',
					RUS_working: [],
					working: [],
					century: [],
					photos: [],
				},
			},
		};
	}
};

export default InformationAboutPerson;
