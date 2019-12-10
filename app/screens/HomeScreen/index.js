import React, { useState, useEffect } from "react";
import HomeView from '../../components/views/HomeView';
import NoEventsView from '../../components/views/NoEventsView';
import LoadingView from '../../components/views/LoadingView';
import { endPoint, events, eventsfull } from '../../config/routes';

const monthNames = ["Ene.", "Feb.", "Mar.", "Abr.", "May.", "Jun.",
  "Jul.", "Ago.", "Sep.", "Oct.", "Nov.", "Dic."];

async function getAllEvents(){
  let DATA = [];
  let complete_url = `${endPoint}${eventsfull}`;

  const respuesta = await fetch(complete_url).then(
    (response) => response.json()
  )

  respuesta.forEach(
    function(i){

      let element = i.event;
      let date = new Date();
      if(element.date != null){
        date = new Date(element.date.toString());
      }

      DATA.push(
        {
          id: element.id,
          poster: element.poster,
          event: element.title,
          place: element["place_name"],
          username: element["user_nick"],
          followers: i.likes.quantity,
          follow: i.likes.me,
          day: date.getDate(),
          month: monthNames[date.getMonth()],
          details: element.details,
          markers: [{
            title: element["place_name"],
            coordinates: {
              latitude: element.latitude,
              longitude: element.longitude
            }
          }],
          info: element.details,
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