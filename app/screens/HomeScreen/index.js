import React, { useState, useEffect } from "react";
import HomeView from '../../components/views/HomeView';
import NoEventsView from '../../components/views/NoEventsView';
import LoadingView from '../../components/views/LoadingView';
import { endPoint, events } from '../../config/routes';

const monthNames = ["Ene.", "Feb.", "Mar.", "Abr.", "May.", "Jun.",
  "Jul.", "Ago.", "Sep.", "Oct.", "Nov.", "Dic."];

async function getAllEvents(){
  let DATA = [];
  let complete_url = `${endPoint}${events}`;

  const respuesta = await fetch(complete_url).then(
    (response) => response.json()
  )

  respuesta.data.forEach(
    function(i){
      let date = new Date();
      if(i.attributes.date != null){
        date = new Date(i.attributes.date.toString());
      }

      DATA.push(
        {
          id: i.id,
          poster: i.attributes.poster,
          event: i.attributes.title,
          place: i.attributes["place-detail"],
          username: i.relationships.user.data.nickname,
          followers: 123,
          follow: true,
          day: date.getDate(),
          month: monthNames[date.getMonth()]
        }
      );
    }
  );

  return DATA;
}

const HomeScreen = ({ navigation }) => {
  [eventsLoaded, setEventsLoaded] = useState(false);
  [eventos, setEventos] = useState('');

  // component did mount
  useEffect(() => {
    getAllEvents().then(
      setEventos
    ).then(
      () => setEventsLoaded(true)
    )
  }, [eventsLoaded]);
  
  if(!eventsLoaded){
    return <LoadingView/>
  }else if(eventos.length === 0){
    return <NoEventsView
    goToNewEvent={() => navigation.navigate('NewEventScreen')}
  />
  }

  return <HomeView
      goToNewEvent={() => navigation.navigate('NewEventScreen')}
      events={eventos}
      goToEvent={navigation}
    />;
  	
}

export default HomeScreen;