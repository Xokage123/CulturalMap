// Next
import type { InferGetStaticPropsType } from 'next';
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
	console.log(personInfo);
	const router: NextRouter = useRouter();
	return (
		<div>
			<Button onClick={() => router.back()} variant="outlined" color="error">
				Назад
			</Button>
			<Typography variant="h2" gutterBottom>
				{personInfo.initial}
			</Typography>
			<Typography variant="h4" gutterBottom>
				Текстовая информация
			</Typography>
			<Typography variant="body1" gutterBottom>
				{personInfo.infarmation}
			</Typography>
		</div>
	);
};

export async function getStaticPaths() {
	return {
		paths: arrayPathsRouting,
		fallback: true,
	};
}
export const getStaticProps = async ({ params }: any) => {
	const personInfo = await getPerson(params.name);
	return {
		props: {
			personInfo,
		},
	};
};

export default InformationAboutPerson;
