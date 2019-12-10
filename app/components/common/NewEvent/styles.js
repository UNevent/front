import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window')

export default EStyleSheet.create({

  inputDate:{
    width: WIDTH * 0.7
  },
  containerStyle:{
    width: WIDTH - 55,
    height: 40,
    backgroundColor: 'black',
    color: '#DFDFDF',
   
    marginHorizontal:25,
    marginVertical:  7
  },
  inputContainerStyle	: {
    borderColor: 'white',
    backgroundColor: 'black',
  },
  listStyle: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: '#DFDFDF',
  }
});