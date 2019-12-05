import React from 'react';
import HomeView from '../../components/views/HomeView';

import { useSelector, useDispatch } from 'react-redux';
import { getEventsData } from '../../store/selectors';

const HomeScreen = ({ navigation }) => {
    const events_selector = useSelector(getEventsData);
    const dispatch = useDispatch();

    if(events_selector.length > 0){
      return <HomeView
        goToNewEvent={() => navigation.navigate('NewEventScreen')}
        events={events_selector}
        goToEvent={() => navigation.navigate('EventScreen')}
      />;
    }
  	
}

export default HomeScreen;