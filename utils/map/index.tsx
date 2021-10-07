// Interface
import type { IMapInformation } from 'interfaces/interface/map';
// Styles__Material
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const generateContentForPopup = (
	classContentPopup: string,
	information: IMapInformation
) => {
	return (
		<Card className={classContentPopup} sx={{ minWidth: 275, display: 'none' }}>
			<CardContent>
				<Typography variant="h6" component="div">
					{information.place}
				</Typography>
				<Typography sx={{ mb: 1.5 }} color="text.secondary">
					adjective
				</Typography>
				<Typography variant="body2">well meaning and kindly.</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	);
};
