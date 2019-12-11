import EStyleSheet from 'react-native-extended-stylesheet';
import { Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window')

export default EStyleSheet.create({
  btn:{
    marginTop:'5rem'
  },
  inputDate:{
    width: WIDTH * 0.7
  },
  datePickerContainer:{
    width: WIDTH - 55,
    backgroundColor:'rgba(0,0,0,0.35)',
    borderWidth: 0,
    marginHorizontal:25,    
    marginTop: '0.5rem',
    marginBottom: '0.5rem',
  },
  containerStyle:{
    width: WIDTH - 55,
    marginHorizontal:25,
    marginVertical:  7,
    zIndex: 1,
  },
  listStyle: {
    backgroundColor: 'rgba(0,0,0,0.5)',  
  },
  listContainerStyle:{
    maxHeight: '30rem',
    minHeight:'100%',
    marginLeft:'-0.7rem',
    width: '107%' ,

  },
  inputContainerStyle	: {
    borderWidth: 0,
    borderBottomWidth: 1,
  },
  AutoStyle:{
    backgroundColor: 'rgba(0,0,0,0.35)',
    color: 'rgb(255,255,255)' ,
    fontSize: 18,
    height: 40,
    paddingLeft: '0.5rem',
  },
  touchStyle: {   
    backgroundColor: 'rgba(0,0,0,0)',
    zIndex: 2
  },
  autocompleteContainer: {
    flex: 1,
    zIndex: 1,
  },
  itemStyle:{    
    color: 'rgb(255,255,255)' ,
    marginBottom: '0.5rem',
    fontSize: 16,

  },
  tagsContainer:{
    marginHorizontal:25,
    marginVertical:  7,
    justifyContent: 'space-between',
    flex:2,
    flexDirection: 'row'
    
  }
});