import React from "react";
import PropTypes from "prop-types";
import { Button, View, Text } from "react-native";
import styles from "./styles";

const LandingView = ({ goToQRScanner, gotToAlbum, gotToTreeListMap }) => {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
    </View>
  );
};

LandingView.propTypes = {
  goToQRScanner: PropTypes.func.isRequired,
  gotToAlbum: PropTypes.func.isRequired,
  gotToTreeListMap: PropTypes.func.isRequired,
};

export default LandingView;
