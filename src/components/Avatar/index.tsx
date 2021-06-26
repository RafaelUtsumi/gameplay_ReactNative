import React from 'react';
import { 
  Image,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { theme } from '../../global/styles/globalTheme';
import { styles } from './styles';

type Props = {
	urlImage: string;
}

export function Avatar({urlImage}: Props) {
	const { secondary080, secondary100 } = theme.colors;

	return (
		<LinearGradient
			style = { styles.container }
			colors = {[secondary080, secondary100]}
		>
			<Image
				source={{ uri: urlImage}}
				style={styles.avatar}
			/>
		</LinearGradient>
	)

}