// Next
import type { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';
// React
import uuid from 'react-uuid';
// Router
import routes from 'routes';
// Interace
import { IPersonInformation } from 'interfaces/interface/person';
// Axios
import axios from 'axios';

const CreateLayer = dynamic(
	() => {
		return import('API/leaflet');
	},
	{
		ssr: false,
	}
);

const Home = ({ persons }: InferGetStaticPropsType<typeof getStaticProps>) => {
	return (
		<div>
			<ul>
				{persons.map((person: IPersonInformation) => {
					return (
						<li key={uuid()}>
							<Link href={`${routes.person.path}/${person.initial}`} passHref>
								<button>Переход к странице {person.initial}</button>
							</Link>
							<Link href={`${routes.map.path}/${person.initial}`} passHref>
								<button>Переход к карте {person.initial}</button>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export const getStaticProps = async () => {
	const test = await axios({
		method: 'get',
		url: routes.person.api,
		baseURL: String(process.env.NEXT_PUBLIC_PATH),
	});
	return {
		props: {
			persons: test.data,
		},
	};
};

export default Home;
