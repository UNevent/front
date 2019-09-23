import React from "react";
import { View, Text, Image } from "react-native";

import styles from '../../../assets/styles/general/styles';

const UNEventHeader = ({}) => {
	return(
		<View style={styles.principal}>
	    	<View style={styles.container}>
	    		<Text>UNEvent</Text>
	    	</View>
	    </View>
	);
}

export default UNEventHeader;