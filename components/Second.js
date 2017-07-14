
import React, {Component} from 'react';
import {
	View,
	Text,
	StyleSheet
} from 'react-native';
export default class Second extends Component {
	constructor (props) {
		super(props);
	}

	render () {
		return (
			<View 
				style = {[ 
					styles.container
				]}
			>
				<Text>My First Screen: Button Clicked</Text>
			</View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});