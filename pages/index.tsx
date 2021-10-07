// Next
import type { InferGetStaticPropsType } from 'next';
import Link from 'next/link';
// React
import uuid from 'react-uuid';
// Router
import routes from 'routes';
// Interace
import { IPersonInformation } from 'interfaces/interface/person';
// Axios
import axios from 'axios';
// Style__Material-Core
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PersonIcon from '@mui/icons-material/Person';
import MapIcon from '@mui/icons-material/Map';
import CloseIcon from '@mui/icons-material/Close';
// React
import { useState, useCallback, useMemo } from 'react';

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

	return (
		<>
			<Box sx={{ width: '100%', maxWidth: 300, bgcolor: 'background.paper' }}>
				<List>
					{persons.map((person: IPersonInformation) => {
						return (
							<ListItem
								sx={{
									display: 'flex',
									maxWidth: '100%',
									flexWrap: 'wrap',
									border: '2px solid black',
									borderRadius: '20px',
									padding: '10px',
									boxShadow: '0 0 20px rgba(0,0,0, 1)',
								}}
								key={uuid()}
							>
								<h4
									style={{
										textAlign: 'center',
									}}
								>
									{person.initial}
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
							</ListItem>
						);
					})}
				</List>
			</Box>
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
