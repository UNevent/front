import EStyleSheet, { absoluteFill } from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
import Constants from 'expo-constants';

const { width: WIDTH } = Dimensions.get('window')

export default EStyleSheet.create({
  safearea:{
    flex: 1,
    width: WIDTH,
    marginTop: Constants.statusBarHeight,
  },
  backmap:{
    flex:1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonew:{
    position: 'absolute',
    bottom: '2rem',
    right: '2rem'
  },
  title: {
    color: 'white',
    fontSize: 50,
    fontWeight: 'bold',
    textAlign: 'center' 
  },
  backmap:{
    flex: 1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo:{
    width: 120,
    height: 120,
    alignSelf: 'center'
  },
});