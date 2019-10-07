import React from 'react';
import {  Text, View } from 'react-native'
import styles from './styles.js';
import PropTypes from 'prop-types'
import { Dimensions } from 'react-native';
import ButtonFav from '../ButtonFav/index.js';

const CardHeader = ({  event, place, username,followers, follow }) => {
  return (
    <View style={styles.container}>
      <View style={styles.dateContainer}>
        <Text style={styles.date}>28</Text>
        <Text style={styles.date}>JAN</Text>
      </View>
      <View style={styles.info}>
        <Text style={styles.event}>{event}</Text>
        <Text style={styles.place}>{place}</Text>
        <Text style={styles.username}>{username}</Text>
      </View>
      <View style={styles.follow}>
        <ButtonFav check={follow}></ButtonFav>
        <Text>{followers}</Text>
      </View>
    </View>
   
  )
}

CardHeader.propTypes = {
  event: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired
}

CardHeader.defaultProps = {
 
}

export default CardHeader;
