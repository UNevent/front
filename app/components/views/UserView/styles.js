import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
  backmap:{
    flex:1,
    width: null,
    height: null,
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  header:{
    flex:0.1,
    height: 50,
    alignItems: 'center' 
  },
  logo:{
    width: 120,
    height: 120,
    alignSelf: "center"
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  user: {
    flex: 1,
    flexDirection: 'row',
    top:30,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
  },
  avatar: {
    flex: 1,
    left: 30,
    width: 100,
    height: 100
  },
  userInfo: {
      flex: 3,
      left:30
  },
  userName:{
    color: "white",
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    top: 20
  },
  userEmail:{
    color: "white",
    flex: 1,
    fontSize: 18
  },
   userPreferences : {
     flex:4
   }
});