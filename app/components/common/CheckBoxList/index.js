import React from 'react';
import { Text, View, FlatList } from 'react-native'
import styles from './styles.js';
import PropTypes from 'prop-types';
import CheckboxForm from '../CheckboxForm/index';
import { useDispatch } from 'react-redux';

import { saveTags } from '../../../store/actions';

const CheckBoxList = ({  data, title }) => {
  const dispatch = useDispatch();

  const loadEvents = (etiquetas) => dispatch(saveTags(etiquetas));

  let tags = [];
  _onSelect = ( item ) => {
    item.forEach(
      (i) => {
        if(i.checked && !tags.includes(i.id)){
          tags.push(i.id);
        }else if(!i.checked && tags.includes(i.id)){
          tags.splice(tags.indexOf(i.id), tags.indexOf(i.id) + 1);
        }
      }
    );

    loadEvents(tags)
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
