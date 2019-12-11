import React from 'react';
import { Text, View, FlatList } from 'react-native'
import styles from './styles.js';
import PropTypes from 'prop-types'
import CheckboxForm from '../CheckboxForm/index'

const CheckBoxList = ({  data, title }) => {
  _onSelect = ( item ) => {
    console.log(item);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
        <CheckboxForm
              style={styles.checkListStyle}
              dataSource={data}
              itemShowKey="name"
              itemCheckedKey="checked"
              onChecked={(item) => this._onSelect(item)}
              textStyle={styles.textStyle}
        />
      </View>
   
  )
}

CheckBoxList.propTypes = {
  data: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
}

CheckBoxList.defaultProps = {
}

export default CheckBoxList;
