import React from 'react';
import { StyleSheet, Text, View,Viewstyle} from 'react-native';
export default class Forcast extends React.Component {
    render() {
      return (
        <View>
          <Text>{this.props.main}</Text>
          <Text>{this.props.description}</Text>
          <Text>{this.props.temp}</Text>
          <Text>°C</Text>
          
        </View> 
      );
    } 
}
const styles = StyleSheet.create({
    container: { paddingTop: 25},
    backdrop: { width: '100%', 
    height: '100%'},
  });