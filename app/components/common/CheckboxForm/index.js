import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {ScrollView,View,Text, Dimensions,TouchableWithoutFeedback} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles.js';

const WINDOW_WIDTH = Dimensions.get('window').width;

class CheckboxForm extends Component {
  constructor(props) {
    super(props);
    this.renderCheckItem = this.renderCheckItem.bind(this);
    this._onPress = this._onPress.bind(this);
    this.state = {
      dataSource: props.dataSource
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      dataSource: nextProps.dataSource
    });
  }

  static propTypes = {
    dataSource: PropTypes.array,
    itemShowKey: PropTypes.string,
    itemCheckedKey: PropTypes.string,
    iconColor: PropTypes.string,
    onChecked: PropTypes.func,
  };

  static defaultProps = {
    dataSource: [],
    itemShowKey: 'label',
    itemCheckedKey: 'checked',
    iconColor: '#2f86d5',
  };

  _onPress(item, i) {
    const outputArr = this.state.dataSource.slice(0);
    outputArr[i] = item;
    this.setState({ dataSource: outputArr });

    if (this.props.onChecked) {
      this.props.onChecked(outputArr);
    }
  }

  renderCheckItem(item, i) {
    const { itemShowKey, itemCheckedKey,  iconColor, textStyle } = this.props;
    const isChecked = item[itemCheckedKey] || false;

    return (
      <TouchableWithoutFeedback
        key={i}
        onPress={() => {
          item[itemCheckedKey] = !isChecked;
          this._onPress(item, i);
        }}
      >
        <View style={styles.listStyle}   >
          <Icon
            name={isChecked ? 'md-checkbox' : 'ios-square-outline'}
            size={25}
            color={iconColor}
          />
            <Text style={{...textStyle}}> {'' + item[itemShowKey]}</Text>
          
        </View>
      </TouchableWithoutFeedback>
    );
  }

  render() {
    return (
      <ScrollView
        {...this.props}
        horizontal={ false}
        style={[{ width: WINDOW_WIDTH }, this.props.style]}
      >
        {
          this.state.dataSource.map((item, i) => this.renderCheckItem(item, i))
        }
      </ScrollView>
    );
  }

}

export default CheckboxForm;