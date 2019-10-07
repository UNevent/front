import React from "react";
import styles  from './styles';
import { SafeAreaView, View, FlatList, Text, ImageBackground } from 'react-native';
import Images from '../../../assets/Images';
import CardEvent from '../../common/CardEvent';
import ButtonIcon from "../../common/ButtonIcon";

const DATA = [
  {
    id:1,
    poster:'https://www.las2orillas.co/wp-content/uploads/2017/04/UNal-1-780x514.jpg',
    event:"Evento",
    place:"lugar",
    username:"cuenta que lo creo",
    followers:123
  },{
    id:2,
    poster:'https://www.eltiempo.com/files/despliegue_video/uploads/2017/09/21/59c43014a9ae8.jpeg',
    event:"Evento2",
    place:"lugar",
    username:"cuenta que lo creo",
    followers:123
  },{
    id:3,
    poster:'http://2.bp.blogspot.com/-cePaplO8t3c/TjDXCPv63mI/AAAAAAAAA2Q/Sby0BIeLkss/s1600/ciencia_y_tecnologia.jpg',
    event:"Evento3",
    place:"lugar",
    username:"cuenta que lo creo",
    followers:123
  }
]

const HomeView = ({}) => {
  	return (
      
	    <ImageBackground source={Images.backmap} style={styles.backmap}>

          <SafeAreaView style={styles.safearea}>
            <FlatList
              data={DATA}
              renderItem={({ item }) => 
              <CardEvent  poster={item.poster}
                  event={item.event}
                  place={item.place}
                  username={item.username}
                  followers={item.followers}
                  />}              
              keyExtractor={item => item.id.toString()}
            />
          </SafeAreaView >
          <View style={styles.buttonew}>
            <ButtonIcon icon={'plus-circle'} size={50}></ButtonIcon>
          </View>
      </ImageBackground>

  	);
};
export default HomeView;
