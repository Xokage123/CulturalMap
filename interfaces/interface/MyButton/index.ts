// Interface__Material
import { SxProps } from '@material-ui/core/node_modules/@material-ui/system';
// Type__My
import { TButtonVariant, TButtonColor } from 'interfaces/type/MyButton';

export interface IButtonProps {
  text: string;
  color?: TButtonColor;
  style?: SxProps;
  variant?: TButtonVariant;
  callbackFunctions?: Array<any>;
}

export interface IExampleButton {
  callbackFunctions?: Array<any>;
}
