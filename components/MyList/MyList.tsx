// React
import uuid from 'react-uuid';
// Style__Material-Core
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
// Styles__My
import styles from './mylist.module.scss';
import { SxProps } from '@mui/material/node_modules/@mui/system';

interface IListProps {
	elements: Array<any>;
	title?: string;
	functionCreateContent: (elem: any) => any;
	styleItem: SxProps;
	styleList: SxProps;
}

const SX_Box: SxProps = { width: '100%', bgcolor: 'background.paper' };

export const MyList: React.FC<IListProps> = (props) => {
	const { elements, functionCreateContent, styleItem, styleList, title } =
		props;
	return (
		<Box sx={SX_Box}>
			{title ? (
				<Typography variant="h4" gutterBottom>
					{title}
				</Typography>
			) : null}
			<List sx={styleList}>
				{elements.map((person: any) => {
					return (
						<ListItem sx={styleItem} key={uuid()}>
							{functionCreateContent(person)}
						</ListItem>
					);
				})}
			</List>
		</Box>
	);
};
