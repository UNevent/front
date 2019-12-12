import React from "react";
import styles  from './styles';
import { SafeAreaView, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import Images from '../../../assets/Images';
import CardEvent from '../../common/CardEvent';
import { Icon } from 'react-native-elements'


const HomeView = ({ goToNewEvent, events, goToEvent }) => {
  return (
    <ImageBackground source={Images.backmap} style={styles.backmap}>
        <SafeAreaView style={styles.safearea}>
          <FlatList
            data={events}
            renderItem={({ item }) => 
            <TouchableOpacity activeOpacity={0.2} onPress={() => {goToEvent.navigate('EventScreen', {eventId: item.id, event: item})}}> 
              <CardEvent  
                  poster={item.poster}
                  event={item.event}
                  place={item.place}
                  username={item.username}
                  followers={item.followers}
                  follow={item.follow}
                  day={item.day}
                  month={item.month}
                  />
            </TouchableOpacity>}              
            keyExtractor={item => item.id.toString()}
          />
        </SafeAreaView >
        <View style={styles.buttonew}>
          <Icon
            name='add-circle'
            size={60}      
            color= {'#2089dc'}
            onPress={goToNewEvent} />
        </View>
    </ImageBackground>

  );
};
export default HomeView;
