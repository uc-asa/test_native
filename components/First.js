
import React, {Component} from 'react';
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class First extends Component {
  constructor (props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  componentWillMount() { 
    this.setState({
      text : ''
    })
  }
  changeText() {
    this.setState({
      text : 'Button Clicked'
    })
  }

  render () {
    return (
      <View 
        style = {[ 
          styles.container
        ]}
      >
        <Text>My First Screen: {this.state.text}</Text>
        <TouchableOpacity 
            style = {[
               styles.btnPrimary,
               styles.smallButton,
               styles.center,
            ]} 
            activeOpacity = { 0.5 } 
            onPress = { () => this.changeText()}
          >
            <Text style={[ styles.textSuccess ]}>
              Next
            </Text>
          </TouchableOpacity>
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
  btnResulution: {
    height: 30,
    width: 100
  },
  textSuccess : {
  color: '#1ab394',
  },
  btnPrimary: {
    borderWidth: 1,
    borderColor: '#ccc',
    shadowColor: '#1F99C7',
    shadowOpacity: 0.8,
    shadowRadius: 1,
    shadowOffset: {
      height: 0.9,
      width: 0.9,
    },
    padding: 20,
    margin: 5
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallButton: {
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 7,
    paddingRight: 7,
    borderRadius: 3,
  },
});