import React from 'react';
import { Icon } from 'react-native-elements'
import styles from './styles';
import PropTypes from 'prop-types'


const ButtonIcon = ({ icon, size, evento }) => {
  return (
    <Icon
      name={icon}
      type='font-awesome'
      size={size}
      onPress={evento} />
       
  )
}

ButtonIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  size: PropTypes.number
}

ButtonIcon.defaultProps = {
  size: 20
}

export default ButtonIcon;