// Next
import type { InferGetStaticPropsType, GetStaticPaths } from 'next';
import { NextRouter, useRouter } from 'next/router';
import dynamic from 'next/dynamic';
// Components
import { Map } from 'components/Map';
// Data
import { arrayPathsRouting } from 'data/persons';
// Api
import { getPerson } from 'API/persons';
// Style__Material
import Button from '@material-ui/core/Button';

const CreateLayer = dynamic(
	() => {
		return import('API/leaflet');
	},
	{
		ssr: false,
	}
);

const InformationAboutMap = (
	props: InferGetStaticPropsType<typeof getStaticProps>
) => {
	const router: NextRouter = useRouter();

	if (router.isFallback) {
		return <div>Loading...</div>;
	}
	return (
		<>
			<Button onClick={() => router.back()} variant="outlined" color="error">
				Назад
			</Button>
			<p>Страница: {router.query.name}</p>
			<Map DynamicElement={CreateLayer} />
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

export default InformationAboutMap;
