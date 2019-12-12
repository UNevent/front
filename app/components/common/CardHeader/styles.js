import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window')

export default EStyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    padding: '0.2rem'
  },
  info:{
    flex: 6,
    marginLeft: 1,
    padding: '0.3rem',
  },
  izqContainer:{
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: WIDTH /5,
    height: WIDTH /5
  },
  containerDate:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#B5B5B5',
    width: WIDTH /5,
    height: WIDTH /3
  },
  date:{
    fontSize:20,
    color: '#333399',
    fontWeight:'bold'
  },
  follow:{
    flex: 1,
    flexDirection: 'row-reverse',
    justifyContent: 'flex-end',
    alignItems: 'center',
    
  },
  event:{
    fontSize: 18,
    fontWeight:'bold',
  },
  place:{
    fontSize: 16,
  },
  username:{
    fontSize: 12,
  }
});