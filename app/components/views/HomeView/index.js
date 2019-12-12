import React, { useState, useEffect } from "react";
import styles  from './styles';
import { SafeAreaView, View, FlatList, TouchableOpacity, ImageBackground, ActivityIndicator, Text } from 'react-native';
import Images from '../../../assets/Images';
import CardEvent from '../../common/CardEvent';
import ButtonIcon from "../../common/ButtonIcon";
import ButtonText from '../../common/ButtonText';

import { endPoint, events_filter } from '../../../config/routes';

const monthNames = ["Ene.", "Feb.", "Mar.", "Abr.", "May.", "Jun.",
  "Jul.", "Ago.", "Sep.", "Oct.", "Nov.", "Dic."];

async function getAllEvents(tags, user, fecha_inicio, fecha_fin){
  let complete_url = `${endPoint}${events_filter}`;
  let DATA = [];
  body = {};

  if(tags != null){
    body["tags"] = tags;
  }

  if(user != null){
    body["user_id"] = user;
  }

  if(fecha_inicio != null){
    body["fecha_inicio"] = fecha_inicio;
  }

  if(fecha_fin != null){
    body["fecha_fin"] = fecha_fin;
  }

  let respuesta = await fetch(complete_url, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }).then(
    (response) => (
      response.json()
    )
  ).then(
    (responseJson) => {
        return responseJson;
    }
  ).catch(
      (error) => {
        console.error(error);
      }
  );

  if(respuesta.length >= 2){
    respuesta.pop();
  }

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

const HomeView = ({ goToNewEvent, events, goToEvent }) => {
  [filtered, setFiltered] = useState(false);
  [eventos_c, setEventos_c] = useState('');

  useEffect(() => {
    setEventos_c(events)
  }, []);

  if(!filtered){
    return (
      <ImageBackground source={Images.backmap} style={styles.backmap}>
          <ButtonText name={"filtrar"} 
            evento={() => {
              setFiltered(true);
              getAllEvents([1,2], null,null,null).then(
                (response) => setEventos_c(response)
              ).then(
                setFiltered(false)
              )
            }}>
  
          </ButtonText>
          <SafeAreaView style={styles.safearea}>
            <FlatList
              data={eventos_c}
              renderItem={({ item }) => 
              <TouchableOpacity activeOpacity={0.2} onPress={() => {goToEvent.navigate('EventScreen', {eventId: item.id, event: item})}}> 
                <CardEvent  
                    poster={item.poster}
                    event={item.event}
                    place={item.place}
                    username={item.username}
                    followers={item.followers}
                    follow={item.follow}
                    day={item.day}
                    month={item.month}
                    />
              </TouchableOpacity>}              
              keyExtractor={item => item.id.toString()}
            />
          </SafeAreaView >
          <View style={styles.buttonew}>
            <ButtonIcon icon={'plus-circle'} size={50} evento={goToNewEvent}></ButtonIcon>
          </View>
      </ImageBackground>
  
    );
  }
  
  return (
    <ImageBackground source={Images.backmap} style={styles.backmap}>
        <ActivityIndicator size="large" color="#ffffff" />
        <Text style={{color: 'white'}}>Cargando...</Text>
    </ImageBackground>
  );

};
export default HomeView;
