import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window')

export default EStyleSheet.create({
  title:{
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    
  }
});