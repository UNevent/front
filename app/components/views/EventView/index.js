import React from "react";
import styles  from './styles';
import { ScrollView, View, Text, ImageBackground } from 'react-native';
import Images from '../../../assets/Images';
import CardEvent from '../../common/CardEvent';
import Map from '../../common/Map';

const DATA =
  {
    id:1,
    poster:'https://www.las2orillas.co/wp-content/uploads/2017/04/UNal-1-780x514.jpg',
    event:"Evento",
    place:"lugar",
    username:"cuenta que lo creo",
    followers:123,
    follow: true,
    info: " Mucha informacion sobre que trata el evento Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    region: {
      latitude: 4.63793,
      longitude: -74.0843,
      latitudeDelta: 0.0175,
      longitudeDelta: 0.008778
    },
    markers:
    [{
      title: "marcador 1",
      description: "Mock marker",
      coordinates: {
        latitude: 4.637928884427862,
        longitude: -74.08430093899369
      }
    }]
  }

const EventView = ({}) => {
  	return (
      
	    <ImageBackground source={Images.backmap} style={styles.backmap}>
        <View style={styles.container}>
          <CardEvent  poster={DATA.poster}
            event={DATA.event}
            place={DATA.place}
            username={DATA.username}
            followers={DATA.followers}
            follow={DATA.follow}
            />
          <Text style={styles.info} >{DATA.info}</Text>
          <Map reg={DATA.region}  marks={DATA.markers} />
        </View>
      </ImageBackground>

  	);
};
export default EventView;
