import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window')

export default EStyleSheet.create({
  input:{
    width: WIDTH - 55,
    minHeight: 40,
    backgroundColor: 'rgba(0,0,0,0.35)',
    //color: 'rgba(255,255,255,0.7)',
    borderWidth: 1,
    borderColor: '#B5B5B5',
    marginHorizontal:25,
    marginVertical:  7
  },
  label:{
    color: 'rgba(255,255,255,0.7)',
  },
});