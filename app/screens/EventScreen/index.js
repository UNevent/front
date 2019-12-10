import React, { useState } from "react";
import EventView from '../../components/views/EventView';
import LoadingView from '../../components/views/LoadingView';

import { endPoint, events, places } from '../../config/routes';

let DATA = {};
const monthNames = ["Ene.", "Feb.", "Mar.", "Abr.", "May.", "Jun.",
  "Jul.", "Ago.", "Sep.", "Oct.", "Nov.", "Dic."];

async function getEvent(id){
  let complete_url = `${endPoint}${events}/${id}`;

  return fetch(complete_url).then(
    (response) => response.json()
  ).then(
    (responseJson) => {
      return responseJson;
    }
  ).catch(
    (error) => {
      console.error(error);
    }
  );
}

async function getPlace(id){
  let complete_url = `${endPoint}${places}/${id}`;

  return fetch(complete_url).then(
    (response) => response.json()
  ).then(
    (responseJson) => {
      return responseJson;
    }
  ).catch(
    (error) => {
      console.error(error);
    }
  );
}

const EventScreen = ({ navigation, event }) => {

  const [eventLoad, setEventLoad] = useState(false);

  DATA = navigation.getParam('event', '')
/*
  getEvent(navigation.getParam('eventId', '')).then(
    (response) => {
      let item = response.data;
      let date = new Date(item.attributes.date.toString());
      DATA = {
        id: item.id,
        poster: item.attributes.poster,
        event: item.attributes.title,
        place: item.attributes["place-detail"],
        username: item.relationships.user.data.nickname,
        followers: 123,
        follow: true,
        day: date.getDate(),
        month: monthNames[date.getMonth()],
        info: item.attributes.details,
        place_id: item.relationships.place.data.id
      }

      getPlace(DATA.place_id).then(
        (response) => {
          let item = response.data.attributes;
          let marker = {
            title: item.name,
            coordinates: {
              latitude: item.latitude,
              longitude: item.longitude
            }
          }

          DATA["markers"] = [marker];

          setEventLoad(true);
        }
      )
    }
  );*/

    return <EventView evento={DATA}/>;

}

export default EventScreen;