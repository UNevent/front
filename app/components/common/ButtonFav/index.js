import React from 'react';
import { CheckBox } from 'react-native-elements'
import styles from './styles';
import PropTypes from 'prop-types'


const ButtonFav = ({ check, title }) => {
  setState=()=>{
    this.check= !this.check
    console.log(check)
  }
  return (
    <CheckBox
    containerStyle={styles.containerStyle}
      title={title}
      center
      iconRight
      iconType={'material'}
      checkedIcon={'star'}
      uncheckedIcon={'star-border'}
     // checkedColor={'red'}
      checked={check}
      onPress={() => this.setState}
    />
       
  )
}

ButtonFav.propTypes = {
  state: PropTypes.bool,
  title: PropTypes.string
}

ButtonFav.defaultProps = {
  state: false,
  title: ''
}

export default ButtonFav;