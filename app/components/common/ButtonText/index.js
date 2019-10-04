import React from 'react';
import { ThemeProvider, Button } from 'react-native-elements';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types'
import styles from './styles.js'

EStyleSheet.build({
  $textColor: '#0275d8'
})

const ButtonText = ({ name, background, evento }) => {
  return (
      <Button title={name} type={background} 
        buttonStyle={styles.button} titleStyle={styles.text} onPress={evento}/>

  )
}

ButtonText.propTypes = {
  name: PropTypes.string.isRequired,
  background: PropTypes.string
}

ButtonText.defaultProps = {
  background: 'solid',
}

export default ButtonText;