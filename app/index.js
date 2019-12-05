import React, { useState } from 'react';
import AppNavigation from './navigation';
import { registerRootComponent } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';
import { AsyncStorage } from "react-native";
import { Provider, useSelector, useDispatch } from 'react-redux';
import store from './store';
import { AppLoading } from 'expo';
import { authenticate } from './store/actions';

EStyleSheet.build();

_userAsync = async () => {
	return await AsyncStorage.getItem('usr');
}

_passAsync = async () => {
	return await AsyncStorage.getItem('pw');
}

const DATA = [
  {
    id:1,
    poster:'https://www.las2orillas.co/wp-content/uploads/2017/04/UNal-1-780x514.jpg',
    event:"Evento",
    place:"lugar",
    username:"cuenta que lo creo",
    followers:123,
    follow: true,
    day: '28',
    month: 'Jan'
  },{
    id:2,
    poster:'https://www.eltiempo.com/files/despliegue_video/uploads/2017/09/21/59c43014a9ae8.jpeg',
    event:"Evento2",
    place:"lugar",
    username:"cuenta que lo creo",
    followers:123,
    follow: false,
    day: '29',
    month: 'Mar'
  },{
    id:3,
    poster:'http://2.bp.blogspot.com/-cePaplO8t3c/TjDXCPv63mI/AAAAAAAAA2Q/Sby0BIeLkss/s1600/ciencia_y_tecnologia.jpg',
    event:"Evento3",
    place:"lugar",
    username:"cuenta que lo creo",
    followers:123,
    follow: true,
    day: '30',
    month: 'Dec'
  }
]

_getEvents = async () => {
	return await DATA;
}

async function _getSession(auth){
	const session = {
		user: await _userAsync(),
		pass: await _passAsync()
	}
	
	if(session.user && session.pass){
		auth(session.user, session.pass);
	}
}

function AppComponent(){
	const dispatch = useDispatch();

	const [sessionLoaded, setSessionLoaded] = useState(false);

	if(sessionLoaded){
		return (
	  		<AppNavigation />
		);
	}

	const auth = (correo, contrasena) => dispatch(authenticate(correo, contrasena));

	return(
		<AppLoading
	      startAsync={() =>() (_getSession(auth), _getEvents())}
	      onFinish={() => setSessionLoaded(true)}
	      onError={console.warn}
	    />
	);
}

export default registerRootComponent(() => {
	return(
		<Provider store={store}>
			<AppComponent/>
		</Provider>
	);
});