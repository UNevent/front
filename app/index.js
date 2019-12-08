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
	      startAsync={() => _getSession(auth)}
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