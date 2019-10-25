import React from 'react';
import AppNavigation from './navigation';
import { registerRootComponent } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet'
import { Provider } from 'react-redux';
import store from './store';

EStyleSheet.build();

export default registerRootComponent(() => {
  	return (
  		<Provider store={store}>
  			<AppNavigation />
  		</Provider>
	);
});