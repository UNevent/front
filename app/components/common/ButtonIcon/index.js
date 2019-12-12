import React from 'react';
import { Icon } from 'react-native-elements'
import styles from './styles';
import PropTypes from 'prop-types'


const ButtonIcon = ({ icon, size, evento }) => {
  return (
    <Icon
      name={icon}
      size={size}      
      color= {'#2089dc'}
      onPress={evento} />
       
  )
}

ButtonIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number
}

ButtonIcon.defaultProps = {
  size: 25
}

export default ButtonIcon;