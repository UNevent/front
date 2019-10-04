import EStyleSheet, { absoluteFill } from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window')

export default EStyleSheet.create({
  backmap:{
    flex:1,
    width: null,
    height: null,
    justifyContent: 'center',
    alignItems: 'center'
  },
});