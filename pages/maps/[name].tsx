// Next
import type { InferGetStaticPropsType, GetStaticPaths } from 'next';
import { NextRouter, useRouter } from 'next/router';
import dynamic from 'next/dynamic';
// Components
import { Map } from 'components/Map';
// Data
import { arrayPathsRouting } from 'data/persons';
// Api
import { getMapInfo } from 'API/map';
// Interface
import type { ICoordinate } from 'interfaces/interface/map';
// Style__Material
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';

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
	console.log(props);
	const { personInfo } = props;
	const { initial, information } = personInfo;
	const router: NextRouter = useRouter();
	if (router.isFallback) {
		return <div>Loading...</div>;
	}
	return (
		<>
			<Button
				sx={{
					maxWidth: '100px',
				}}
				onClick={() => router.back()}
				variant="contained"
				color="error"
			>
				Назад
			</Button>
			<section>
				<Map
					arrayPlaceInfo={information ? information : []}
					DynamicElement={CreateLayer}
				/>
				<Accordion>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1a-content"
						id="panel1a-header"
					>
						<Typography>Accordion 1</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</Typography>
					</AccordionDetails>
					<AccordionDetails>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</Typography>
					</AccordionDetails>
					<AccordionDetails>
						<Typography>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit.
							Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
							eget.
						</Typography>
					</AccordionDetails>
				</Accordion>
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
				personInfo,
			},
		};
	} catch (er) {
		return {
			props: {
				personInfo: {
					initial: '',
					information: [],
				},
			},
		};
	}
};

export default InformationAboutMap;
