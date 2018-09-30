import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Forcast from './Forcast';

export default class Weather extends React.Component {
    constructor(props) {
    super(props);
       this.state = {
           forcast: {
              main: '-', description: '-', temp: 0
            }
        }
    }
    doIt = () => {
        console.log("Hello from cosole")
      }
    render() {
         return (
            <View style={styles.container}>
              <ImageBackground source={require('../1.jpeg')} style={styles.backdrop}>
               
                <Text>Zip code is {this.props.zipCode}.</Text>
                <Forcast {...this.state.forcast} />
           
               </ImageBackground>
            </View>
         );
    }
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'grey',
        height: 600
     },
    backdrop: { 
      width: '100%', 
    height: '100%'
    },

  
});
