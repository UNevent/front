import React from 'react';
import {  Text, TouchableOpacity } from 'react-native'
import { Card, Button } from 'react-native-elements'
import styles from './styles.js';
import PropTypes from 'prop-types'
import  CardHeader  from '../CardHeader';

const CardEvent = ({ poster, event, place, username,followers }) => {
  return (
    <TouchableOpacity> 
      <Card
        containerStyle={styles.container}
        image={{uri:poster}}>
          <CardHeader  
                    event={event}
                    place={place}
                    username={username}
                    followers={followers}
                    />
        
      </Card>
    </TouchableOpacity>
  )
}

CardEvent.propTypes = {
  poster: PropTypes.string,
  event: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired
}

CardEvent.defaultProps = {
  poster: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Escudo_unal_2016.png",
}

export default CardEvent;
