import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/globalTheme';

export const styles = StyleSheet.create({
	container: {
		width: 48,
		height: 48,
		backgroundColor: theme.colors.secondary040,
		borderRadius: 8,
		fontFamily: theme.fonts.text400,
		color: theme.colors.heading,
		fontSize: 13,
		marginRight: 4,
		textAlign: 'center',
	},
});