import React from 'react';
import NewEventView from '../../components/views/NewEventView';

const NewEventScreen = ({ navigation }) => {
  return <NewEventView goEvents={()=> navigation.navigate('Enter')}/>;
}

export default NewEventScreen;