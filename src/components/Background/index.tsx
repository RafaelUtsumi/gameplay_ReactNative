import React, { ReactNode } from 'react';
import { LinearGradient } from 'expo-linear-gradient';

import { styles } from './styles'; 
import { theme } from '../../global/styles/globalTheme';

type Props = {
	children: ReactNode;
}
 
export function Background({ children }: Props) {
	const { secondary080, secondary100 } = theme.colors;

	return (
		<LinearGradient
			style = { styles.container }
			colors = {[secondary080, secondary100]}
		>
			{ children }
		</LinearGradient>
	)
}