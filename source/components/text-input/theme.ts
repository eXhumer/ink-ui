import {type TextProps} from '@exhumer/ink';
import {type ComponentTheme} from '../../theme.js';

const theme = {
	styles: {
		value: (): TextProps => ({}),
	},
} satisfies ComponentTheme;

export default theme;
export type Theme = typeof theme;
