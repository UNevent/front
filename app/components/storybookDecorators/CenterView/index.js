import React from 'react';
import { View } from 'react-native';
import styles from './styles';

export default ({ children, style }) => (
  <View style={[styles.container, style]}>
    {children}
  </View>
);