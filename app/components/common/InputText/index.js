import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './styles.js';
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { TextInput } from "react-native-gesture-handler";
import { Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window')


const InputText = ({ placeholder, icon, width }) => {
  return (
    <Input
      containerStyle={styles.input}
      labelStyle={styles.label}
      placeholder={placeholder}
      leftIcon={
        <Icon
          name={icon}
          size={24}
          color='#999'
          style={styles.icon}
        />
      }
    />
   
  )
}

InputText.propTypes = {
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.string,
  width: PropTypes.number
}

InputText.defaultProps = {
  width: WIDTH - 55,
  icon: ''
}

export default InputText;