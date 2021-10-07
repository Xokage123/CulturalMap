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
// Data
import { arrayPathsRouting } from 'data/persons';
// Api
import { getPerson } from 'API/persons';
// Components
import { MySwiper } from 'components/MySwiper';
// Style__Material
import Button from '@material-ui/core/Button';
import Typography from '@mui/material/Typography';

const InformationAboutPerson = (
	props: InferGetStaticPropsType<typeof getStaticProps>
) => {
	const { personInfo } = props;
	console.log(personInfo);

	const router: NextRouter = useRouter();

	if (router.isFallback) {
		return <div>Loading...</div>;
	}

	return (
		<div>
			<Button onClick={() => router.back()} variant="outlined" color="error">
				Назад
			</Button>
			{personInfo
				? personInfo.RUS_working.map((work: string) => {
						return (
							<Typography
								key={uuid()}
								variant="caption"
								display="block"
								gutterBottom
							>
								{work}
								{personInfo && personInfo.century.length > 1
									? `${personInfo.century[0]}-${personInfo.century[1]} века`
										? personInfo
										: `${personInfo.century[0]} век`
									: null}
							</Typography>
						);
				  })
				: ''}
			<Typography variant="h3" gutterBottom>
				{personInfo ? personInfo.RUS_initial : ''}
			</Typography>
			<MySwiper photos={personInfo ? personInfo.photos : []} />
			<Typography variant="h4" gutterBottom>
				Текстовая информация
			</Typography>
			<span>
				{personInfo
					? JSON.parse(personInfo.infarmation).map(
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
					  )
					: ''}
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
				personInfo: null,
			},
		};
	}
};

export default InformationAboutPerson;
