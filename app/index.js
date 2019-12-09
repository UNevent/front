import React, { useState } from 'react';
import AppNavigation from './navigation';
import { registerRootComponent } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';
import { AsyncStorage } from "react-native";
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store';
import { AppLoading } from 'expo';
import { authenticate, saveEvents } from './store/actions';

import { endPoint, events } from './config/routes';
import { login } from './components/common/Authentication';

EStyleSheet.build();

// carga el usuario
_userAsync = async () => {
	return await AsyncStorage.getItem('usr');
}

// carga la contrasena
_passAsync = async () => {
	return await AsyncStorage.getItem('pw');
}

const DATA = [];
const monthNames = ["Ene.", "Feb.", "Mar.", "Abr.", "May.", "Jun.",
  "Jul.", "Ago.", "Sep.", "Oct.", "Nov.", "Dic."];

async function _getAllEvents(){
  let complete_url = `${endPoint}${events}`;

  return fetch(complete_url).then(
    (response) => response.json()
  ).then(
    (responseJson) => {
      responseJson.data.forEach(
        (i) => {
          let date = new Date(i.attributes.date.toString());
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
    }
  ).catch(
    (error) => {
      console.error(error);
    }
  );
}

// promesa que carga los eventos
_getEvents = async (loadEvents) => {
  await loadEvents(DATA);
}

// une los datos de usuario
async function _getSession(auth){
	const session = {
		user: await _userAsync(),
		pass: await _passAsync()
	}
	
	if(session.user && session.pass){
    await login(session.user, session.pass).then(
      (response) => {
        if(!response.success){
          if(response.data){
            auth(session.user, session.pass);
          }
        }
      }
    );
	}
}

// esta funcion carga todo
async function loadAllData(events, session){
  await _getAllEvents().then(
    async (response) => {await _getEvents(events)}
  );
  await _getSession(session);
}

// muestra el splash screen o la aplicacion dependiendo si ya cargo todo
function AppComponent(){
	const dispatch = useDispatch();

	const [sessionLoaded, setSessionLoaded] = useState(false);

	if(sessionLoaded){
		return (
	  		<AppNavigation />
		);
	}

  const auth = (correo, contrasena) => dispatch(authenticate(correo, contrasena));
  const loadEvents = (data) => dispatch(saveEvents(data));

	return(
		<AppLoading
	      startAsync={() => loadAllData(loadEvents, auth)}
	      onFinish={() => setSessionLoaded(true)}
	      onError={console.warn}
	    />
	);
}

// navigator
export default registerRootComponent(() => {
	return(
		<Provider store={store}>
			<AppComponent/>
		</Provider>
	);
});