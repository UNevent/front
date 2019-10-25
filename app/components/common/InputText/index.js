import React from 'react';
import styles from './styles.js';
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Input } from 'react-native-elements';
import { Dimensions } from 'react-native';

const { width: WIDTH } = Dimensions.get('window')


const InputText = ({ placeholder, icon, width, passBool, ...props }) => {
  return (
    <Input
      {...props}
      containerStyle={styles.input}
      labelStyle={styles.label}
      placeholder={placeholder}
      placeholderTextColor="#DFDFDF"
      inputStyle={{color: "#DFDFDF"}}
      secureTextEntry={passBool}
      leftIcon={icon == '' ? null :
        <Icon
          name={icon}
          size={24}
          type={'material'}
          color='#999'
          style={styles.icon}
        />
      }
    />
   
  )
}

InputText.propTypes = {
  placeholder: PropTypes.string.isRequired,
  icon: PropTypes.string,
  width: PropTypes.number
}

InputText.defaultProps = {
  width: WIDTH - 55,
  icon: ''
}

export default InputText;
