// Next
import { NextRouter, useRouter } from 'next/router';
// Data
import { arrayPathsRouting } from 'data/persons';

const InformationAboutPerson = () => {
	const router: NextRouter = useRouter();
	return (
		<div>
			<button onClick={() => router.back()}>Назад</button>
			<p>Страница: {router.query.name}</p>
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
	console.log(params);
	return {
		props: {
			data: 'test',
		},
	};
};

export default InformationAboutPerson;
