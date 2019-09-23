import React from 'react';
import AppNavigation from './navigation'
import { registerRootComponent } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet'

EStyleSheet.build();

export default registerRootComponent(() => {
  return <AppNavigation />
});