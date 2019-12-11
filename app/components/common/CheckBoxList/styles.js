import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window')

export default EStyleSheet.create({
  container:{
    backgroundColor: 'rgba(0,0,0,0.35)',
    borderColor:  'rgba(220,220,255,0.5)',
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
    padding: '0.2rem'

  },
  titleStyle:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: '0.5rem'

  },
  textStyle:{
    color: '#fff',
    fontSize: 16,
    marginLeft: '0.2rem'
  },
  checkListStyle:{
    width: '100%',
  }
});