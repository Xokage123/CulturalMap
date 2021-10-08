// Next
import type { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
import { useState, useCallback, useMemo } from 'react';
// Router
import routes from 'routes';
// Component
import { MyList } from '@/components/MyList';
// Interace
import { IPersonInformation } from 'interfaces/interface/person';
// Axios
import axios from 'axios';
// Style__Material-Core
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import MapIcon from '@mui/icons-material/Map';
import CloseIcon from '@mui/icons-material/Close';
import { SxProps } from '@material-ui/core/node_modules/@material-ui/system';

const styleItemPerson: SxProps = {
	display: 'flex',
	maxWidth: '100%',
	flexWrap: 'wrap',
	border: '2px solid black',
	borderRadius: '20px',
	padding: '10px',
	boxShadow: '0 0 20px rgba(0,0,0, 1)',
};
const styleListPerson: SxProps = {
	display: 'grid',
	gridTemplateColumns: 'repeat(3, 1fr)',
	gap: '20px',
};

const Home = ({ persons }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const [openInfo, setOpenInfo] = useState(() => {
		return false;
	});

	const handleClick = useCallback(() => {
		setOpenInfo(() => {
			return true;
		});
	}, []);

	const handleClose = useCallback(() => {
		setOpenInfo(() => {
			return false;
		});
	}, []);

	const action = useMemo(() => {
		return (
			<>
				<IconButton
					size="small"
					aria-label="close"
					color="inherit"
					onClick={handleClose}
				>
					<CloseIcon fontSize="small" />
				</IconButton>
			</>
		);
	}, [handleClose]);

	const createContent = (person: IPersonInformation) => {
		return (
			<>
				<h4
					style={{
						textAlign: 'center',
					}}
				>
					{person.RUS_initial}
				</h4>
				<Link href={`${routes.person.path}/${person.initial}`} passHref>
					<ListItemButton onClick={handleClick}>
						<ListItemIcon>
							<PersonIcon />
						</ListItemIcon>
						<ListItemText primary="Информация" />
					</ListItemButton>
				</Link>
				<Snackbar
					open={openInfo}
					autoHideDuration={6000}
					onClose={handleClose}
					message="Подождите, переход выполняется"
					action={action}
				/>
				<Link href={`${routes.map.path}/${person.initial}`} passHref>
					<ListItemButton onClick={handleClick}>
						<ListItemIcon>
							<MapIcon />
						</ListItemIcon>
						<ListItemText primary="Карта" />
					</ListItemButton>
				</Link>
				<Snackbar
					open={openInfo}
					autoHideDuration={6000}
					onClose={handleClose}
					message="Подождите, переход выполняется"
					action={action}
				/>
			</>
		);
	};

	return (
		<>
			<MyList
				styleList={styleListPerson}
				styleItem={styleItemPerson}
				functionCreateContent={createContent}
				elements={persons}
			/>
		</>
	);
};

export const getStaticProps = async () => {
	try {
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
	} catch (er) {
		return {
			props: {
				persons: [],
			},
		};
	}
};

export default Home;
