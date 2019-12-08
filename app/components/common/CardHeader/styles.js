import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window')

export default EStyleSheet.create({
  container:{
    flex: 1,
    flexDirection: 'row',
    padding: '0.2rem'
  },
  dateContainer:{
    flex: 2,
    width: WIDTH / 5,
    height: WIDTH / 5,
    borderWidth: 1,
    borderColor: '#B5B5B5',
    justifyContent: 'center',
    alignItems: 'center'
  },
  date:{
    fontSize:24,
    color: '#333399'
  },
  info:{
    flex: 5,
    marginLeft: 1,
    padding: '0.3rem',
  },
  follow:{
    flex: 1,
    flexDirection: 'row-reverse',
    padding: '1rem',
    alignItems: 'center',
    justifyContent: 'flex-end',
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