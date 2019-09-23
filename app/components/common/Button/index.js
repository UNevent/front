import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import styles from './styles';
import PropTypes from 'prop-types'

EStyleSheet.build({
  $textColor: '#0275d8'
})

const Button = ({ name, style }) => {
  const mergedStyles = [styles.button, style]
  return (
    <TouchableOpacity style={mergedStyles}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  )
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  style: PropTypes.object
}

Button.defaultProps = {
  style: null,
}

export default Button;