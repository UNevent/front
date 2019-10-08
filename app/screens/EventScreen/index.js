import React from 'react';
import EventView from '../../components/views/EventView';

const DATA =
  {
    id:1,
    poster:'https://www.las2orillas.co/wp-content/uploads/2017/04/UNal-1-780x514.jpg',
    event:"Evento",
    place:"lugar",
    username:"cuenta que lo creo",
    followers:123,
    follow: true,
    info: "Mucha informacion sobre que trata el evento Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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

const EventScreen = ({ navigation }) => {
  	return <EventView evento={DATA}/>;
}

export default EventScreen;