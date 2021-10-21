// Components
import { MyButton } from '..';
// Interface__My
import type { IExampleButton } from 'interfaces/interface/MyButton';

export const ButtonBack: React.FC<IExampleButton> = (props) => {
	const { callbackFunctions } = props;
	return (
		<MyButton
			variant="contained"
			callbackFunctions={callbackFunctions}
			text="Назад"
			color="error"
		/>
	);
};
