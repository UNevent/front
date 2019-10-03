import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window')

export default EStyleSheet.create({
  buttonNew:{
    position: 'absolute',
    bottom: 50,
    left: WIDTH - 50
  },
  toolbar:{
    backgroundColor: 'rgba(0,0,0,0.7)',
    height: 50,
    flex: 1, flexDirection: 'row'
    
  }
});