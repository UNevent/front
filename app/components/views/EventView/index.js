import React from "react";
import styles  from './styles';
import { ScrollView, View, Text, ImageBackground } from 'react-native';
import Images from '../../../assets/Images';
import CardEvent from '../../common/CardEvent';
import Map from '../../common/Map';

const EventView = ({evento}) => {
  	return (
      
	    <ImageBackground source={Images.backmap} style={styles.backmap}>
        <View>
          <ScrollView style={styles.container}>
            <CardEvent  poster={evento.poster}
              event={evento.event}
              place={evento.place}
              username={evento.username}
              followers={evento.followers}
              follow={evento.follow}
              />
            <Text style={styles.info} >{evento.info}</Text>
          </ScrollView>
          <View style={{flex: 1}}>
            <Map marks={evento.markers} />
          </View>
        </View>
      </ImageBackground>

  	);
};
export default EventView;
