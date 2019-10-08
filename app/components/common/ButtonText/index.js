import React from 'react';
import { ThemeProvider, Button } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types'
import styles from './styles.js'
import Icon from 'react-native-vector-icons/FontAwesome';


EStyleSheet.build({
  $textColor: '#0275d8'
})

const ButtonText = ({ name, background, icon, evento, backcolor }) => {
  return (
      <Button title={name} type={background} 
        color={backcolor}
        icon={  
          <Icon
            name={icon}
            size={24}
            color='white'
            style={styles.icon} />
        } 
        buttonStyle={styles.button} titleStyle={styles.text} onPress={evento}/>

  )
}

ButtonText.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string,
  background: PropTypes.string
}

ButtonText.defaultProps = {
  background: 'solid',
  icon: ''
}

export default ButtonText;