import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';
const { width: WIDTH } = Dimensions.get('window')

export default EStyleSheet.create({
  button: {
    width: WIDTH / 2,
   // backgroundColor: '#00cc00',
    marginHorizontal: WIDTH / 4,
    marginVertical:  15,
  },
  text: {
  //  color: 'white',
   // fontSize: 18,
   // textAlign: 'center',
  },
});