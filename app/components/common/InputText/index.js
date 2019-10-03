import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './styles.js';
import PropTypes from 'prop-types'
import { TextInput } from "react-native-gesture-handler";
import { Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window')


const InputText = ({ placeholder, type, width }) => {
  return (
    <TextInput
          style= {styles.input}
          placeholder= {placeholder}
          placeholderTextColor={'rgba(205, 205, 205, 0.7)'}
          textContentType= {type}
          underlineColorAndroid='transparent'
    />
  )
}

InputText.propTypes = {
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  width: PropTypes.number
}

InputText.defaultProps = {
  width: WIDTH - 55,
}

export default InputText;
