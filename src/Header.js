import React from 'react';
import {Text, View} from 'react-native';

const Header = () => {
	const { textStyle, backHeader } = styles;
	return (
		<View style= {backHeader}>
		<Text style= {textStyle}> {props.headerText}</Text>
		</View>
		);
};
const styles = {
	backHeader: {
		backgroundColor: '#3F51B5',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		marginTOp: 5,
		position: 'relative'

	
},
textStyle: {
	fontSize: 25,
	color: '#fff',
	textAlign: 'center'
	}
};

export default Header;