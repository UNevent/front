import React, { useState } from 'react';
import AppNavigation from './navigation';
import { registerRootComponent } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';
import { AsyncStorage } from "react-native";
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store';
import { AppLoading } from 'expo';
import { authenticate, saveEvents, saveAditionals } from './store/actions';
import { validateSession } from './components/common/Authentication';
import { getTags, getPlaces } from './components/common/Aditionals';

EStyleSheet.build();

// carga el usuario
_userAsync = async () => {
	return await AsyncStorage.getItem('usr');
}

// carga la contrasena
_passAsync = async () => {
	return await AsyncStorage.getItem('pw');
}

_tokenAsync = async () => {
  return await AsyncStorage.getItem('token');
}

_clientAsync = async () => {
  return await AsyncStorage.getItem('client');
}

const DATA = [];
console.disableYellowBox = true;

// promesa que carga los eventos
_getEvents = async (loadEvents) => {
  await loadEvents(DATA);
}

// une los datos de usuario
async function _getSession(auth){
	const session = {
		user: await _userAsync(),
    pass: await _passAsync(),
    token: await _tokenAsync(),
    client: await _clientAsync()
	}
	
	if(session.user && session.pass && session.token && session.client){
    await validateSession(session.token, session.client, session.user).then(
      (response) => {
        if(response.success){
          if(response.data){
            auth(session.user, session.pass,  session.client, session.token);
          }
        }
      }
    );
	}
}

async function _getAditionals(load){
  await getPlaces().then(
    (response) => {
      if(response.data && !response.errors){
        getTags().then(
          (respuesta) => {
            if(respuesta.data && !respuesta.errors){
              load(respuesta.data, response.data);
            }
          }
        );
      }
    }
  );
}

// esta funcion carga todo
async function loadAllData(events, session, aditionals){
  await _getSession(session);
  await _getAditionals(aditionals);
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

  const auth = (correo, contrasena, client, token) => dispatch(authenticate(correo, contrasena, client, token));
  const loadEvents = (data) => dispatch(saveEvents(data));
  const loadAditionals = (tags, places) => dispatch(saveAditionals(tags, places));

	return(
		<AppLoading
	      startAsync={() => loadAllData(loadEvents, auth, loadAditionals)}
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