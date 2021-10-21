// React
import { render, unmountComponentAtNode } from 'react-dom';
// Interface
import type { IMapInformation } from 'interfaces/interface/map';
// Data
import { CLASS_PLACE_INFO } from 'data/map';
// Styles__Material
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// Генерируем контент для popup на карте
export const generateContentForPopup = (
	classContentPopup: string,
	information: IMapInformation
) => {
	return (
		<Card className={classContentPopup} sx={{ minWidth: 275, display: 'none' }}>
			<CardContent>
				<Typography component="div">{information.place}</Typography>
			</CardContent>
		</Card>
	);
};
// Вывоод информации о месте
export const generateContentOnPlace = (
	event: any,
	content: IMapInformation
) => {
	const contentText = (
		<>
			<h2>Название места: {content.place}</h2>
			<h3>Жизненный период: {content.RUS_period}</h3>
			<h4>Описание: {content.description}</h4>
		</>
	);
	const container = document.querySelector(`.${CLASS_PLACE_INFO}`);
	container?.innerHTML ? unmountComponentAtNode(container) : null;
	render(contentText, container);
};
