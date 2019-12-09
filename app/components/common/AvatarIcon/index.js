import React from 'react';
import { Avatar } from 'react-native-elements'
import styles from './styles';
import PropTypes from 'prop-types'


const AvatarIcon = ({size, title, event, opacity, showEdit, source }) => {
  return (
    <Avatar
      rounded 
      size={size}
      source={source}
      title={title}
      onPress={event}
      editButton= {{ name: 'camera', type: 'font-awesome', color: '#fff', underlayColor: '#0371f5', size: 20 }}
      activeOpacity={opacity}
      showEditButton={showEdit}
    />
       
  )
}

AvatarIcon.propTypes = {
}

AvatarIcon.defaultProps = {
  size: 'medium',
  title: 'Unal',
  size: 'large',
  showEdit: true,
  
}

export default AvatarIcon;