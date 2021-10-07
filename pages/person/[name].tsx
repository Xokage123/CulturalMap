// Next
import type { InferGetStaticPropsType, GetStaticPaths } from 'next';
import { useRouter, NextRouter } from 'next/router';
// Data
import { arrayPathsRouting } from 'data/persons';
// Api
import { getPerson } from 'API/persons';
// Style__Material
import Button from '@material-ui/core/Button';
import Typography from '@mui/material/Typography';

const InformationAboutPerson = (
	props: InferGetStaticPropsType<typeof getStaticProps>
) => {
	const { personInfo } = props;
	const router: NextRouter = useRouter();
	if (router.isFallback) {
		return <div>Loading...</div>;
	}
	return (
		<div>
			<Button onClick={() => router.back()} variant="outlined" color="error">
				Назад
			</Button>
			<Typography variant="h2" gutterBottom>
				{personInfo.initial ? personInfo.initial : 'Error'}
			</Typography>
			<Typography variant="h4" gutterBottom>
				Текстовая информация
			</Typography>
			<Typography variant="body1" gutterBottom>
				{personInfo.infarmation ? personInfo.infarmation : 'Error'}
			</Typography>
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
		const personInfo = await getPerson(params.name);
		return {
			props: {
				personInfo,
			},
		};
	} catch (er) {
		return {
			props: {
				personInfo: {},
			},
		};
	}
};

export default InformationAboutPerson;
