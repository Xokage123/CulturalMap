// Next
import Link from 'next/link';
// React
import uuid from 'react-uuid';
import { useState, useCallback, useMemo } from 'react';
// Interface
import type { IPersonInformation } from 'interfaces/interface/person';
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
// Styles__My
import styles from './mylist.module.scss';

interface IListProps {
	elements: Array<any>;
	content: (elem: any) => any;
}

export const MyList: React.FC<IListProps> = (props) => {
	const { elements, content } = props;
	return (
		<Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
			<List className={styles.List}>
				{elements.map((person: any) => {
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
							{content(person)}
						</ListItem>
					);
				})}
			</List>
		</Box>
	);
};
