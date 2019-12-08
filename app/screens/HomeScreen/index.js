import React from 'react';
import HomeView from '../../components/views/HomeView';

const DATA = [
  {
    id:1,
    poster:'https://www.las2orillas.co/wp-content/uploads/2017/04/UNal-1-780x514.jpg',
    event:"Evento",
    place:"lugar",
    username:"cuenta que lo creo",
    followers:123,
    follow: true,
    day: '28',
    month: 'Jan'
  },{
    id:2,
    poster:'https://www.eltiempo.com/files/despliegue_video/uploads/2017/09/21/59c43014a9ae8.jpeg',
    event:"Evento2",
    place:"lugar",
    username:"cuenta que lo creo",
    followers:123,
    follow: false,
    day: '29',
    month: 'Mar'
  },{
    id:3,
    poster:'http://2.bp.blogspot.com/-cePaplO8t3c/TjDXCPv63mI/AAAAAAAAA2Q/Sby0BIeLkss/s1600/ciencia_y_tecnologia.jpg',
    event:"Evento3",
    place:"lugar",
    username:"cuenta que lo creo",
    followers:123,
    follow: true,
    day: '30',
    month: 'Dec'
  }
]

const HomeScreen = ({ navigation }) => {
  	return <HomeView
  		goToNewEvent={() => navigation.navigate('NewEventScreen')}
  		events={DATA}
  		goToEvent={() => navigation.navigate('EventScreen')}
  	/>;
}

export default HomeScreen;