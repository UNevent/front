import EStyleSheet, { absoluteFill } from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import Constants from 'expo-constants';

const { width: WIDTH } = Dimensions.get('window')

export default EStyleSheet.create({
  container:{
    flex: 1,
    width: WIDTH,
    marginTop: Constants.statusBarHeight,
    backgroundColor: '#FFF'
  },
  backmap:{
    flex:1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center'
  },
  info:{
    margin:'1rem',
    textAlign: 'justify'
  }
});