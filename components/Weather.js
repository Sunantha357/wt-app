import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import Forcast from './Forcast';

export default class Weather extends React.Component {
    constructor(props) {
    super(props);
       this.state = {
           forcast: {
              main: 'Clouds', description: 'broken clouds', temp: 25.67
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
fetchData = () => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.props.zipCode},th&units=metric&APPID=fd68c0f2039c5a25f666a9ff374bc93e`)
       .then((response) => response.json())
       .then((json) => {
          this.setState(
            {
              forecast: {
                main: json.weather[0].main,
                description: json.weather[0].description,
                temp: json.main.temp
              }
            });
        })
        .catch((error) => {
            console.warn(error);
        });
    }
   
    componentDidMount = () => this.fetchData()
