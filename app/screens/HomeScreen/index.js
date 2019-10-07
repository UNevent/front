import React from 'react';
import HomeView from '../../components/views/HomeView';

const HomeScreen = ({ navigation }) => {
  	return <HomeView
  		goToNewEvent={() => navigation.navigate('NewEventScreen')}
  	/>;
}

export default HomeScreen;