import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window')

export default EStyleSheet.create({
  container:{
    height: WIDTH * 0.7
  },
  buttonStyle:{
    borderRadius: 0,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 0
  },
  textBody:{
    marginBottom: 10
  }
});