import React from "react";
import { View, Text } from "react-native";
import styles  from './styles';
import ButtonGroup from 'react-native-elements';
import ButtonIcon from "../../common/ButtonIcon";

const HomeView = ({}) => {
  	return (
      <View style={styles.container}>
        <View style={styles.toolbar}>        
          <ButtonIcon icon={'bars'} ></ButtonIcon>
          <Text>UNEvent</Text>
          <ButtonIcon icon={'search'} ></ButtonIcon>
          <ButtonIcon icon={'filter'} ></ButtonIcon>
        </View>
        
        <ButtonIcon icon={'plus-circle'} size={50} style={styles.buttonNew}></ButtonIcon>
      
      </View>
  	);
};
export default HomeView;
