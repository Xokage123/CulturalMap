// Interface
import type { IButtonProps } from 'interfaces/interface/MyButton';
// Style__Material
import Button from '@mui/material/Button';

export const MyButton: React.FC<IButtonProps> = (props) => {
	const { text, style, variant, color, callbackFunctions } = props;
	return (
		<Button
			onClick={() => {
				if (callbackFunctions) {
					callbackFunctions.map((func) => {
						func();
					});
				}
			}}
			color={color}
			variant={variant}
			sx={style}
		>
			{text}
		</Button>
	);
};
