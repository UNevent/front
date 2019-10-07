import React from 'react';
import { CheckBox } from 'react-native-elements'
import styles from './styles';
import PropTypes from 'prop-types'


const ButtonFav = ({ check }) => {
  setState=()=>{
    this.check= !this.check
    console.log(check)
  }
  return (
    <CheckBox
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
  state: PropTypes.bool
}

ButtonFav.defaultProps = {
  state: false
}

export default ButtonFav;