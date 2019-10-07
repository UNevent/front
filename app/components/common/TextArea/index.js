import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './styles.js';
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window')


const TextArea = ({ placeholder, width, lines, passBool }) => {
  return (
    <Input
      containerStyle={styles.input}
      labelStyle={styles.label}
      placeholder={placeholder}
      placeholderTextColor="#DFDFDF"
      selectionColor="#DFDFDF"
      underlineColorAndroid="#DFDFDF"
      secureTextEntry={passBool}
    />
   
  )
}

TextArea.propTypes = {
  placeholder: PropTypes.string.isRequired,
  width: PropTypes.number,
  lines: PropTypes.number
}

TextArea.defaultProps = {
  width: WIDTH - 55,
  lines: 3
}

export default TextArea;
