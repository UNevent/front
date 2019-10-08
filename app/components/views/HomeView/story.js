import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { View } from "react-native";

import HomeView from'.';

const DATA = [
  {
    id:1,
    poster:'https://www.las2orillas.co/wp-content/uploads/2017/04/UNal-1-780x514.jpg',
    event:"Evento",
    place:"lugar",
    username:"cuenta que lo creo",
    followers:123,
    follow: true
  },{
    id:2,
    poster:'https://www.eltiempo.com/files/despliegue_video/uploads/2017/09/21/59c43014a9ae8.jpeg',
    event:"Evento2",
    place:"lugar",
    username:"cuenta que lo creo",
    followers:123,
    follow: false
  },{
    id:3,
    poster:'http://2.bp.blogspot.com/-cePaplO8t3c/TjDXCPv63mI/AAAAAAAAA2Q/Sby0BIeLkss/s1600/ciencia_y_tecnologia.jpg',
    event:"Evento3",
    place:"lugar",
    username:"cuenta que lo creo",
    followers:123,
    follow: true
  }
]

const CenteredView = ({ children }) => <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>{children}</View>;


storiesOf('Views/HomeView', module)
  //.addDecorator(content => <CenteredView>{content()}</CenteredView>)
  .add('default view', () => <HomeView events={DATA}/>);
