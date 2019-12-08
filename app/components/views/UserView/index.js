import React from "react";
import { View, Text, ImageBackground, StatusBar, Image, StyleSheet, ScrollView, KeyboardAvoidingView } from "react-native";
import styles  from './styles';
import Images from '../../../assets/Images';
import { Header } from 'react-native-elements';
import ButtonIcon from "../../common/ButtonIcon";
import AvatarIcon from "../../common/AvatarIcon";

const UserView = ({goToHome}) => {
  	return (	    
			<ImageBackground source={Images.backmap} style={styles.backmap}>
				
					<Header style={styles.header} 
						backgroundColor="black"	
						leftComponent={ 
							<ButtonIcon
								icon={'arrow-left'}
								color={'#517fa4'}
								size={25}
								evento={goToHome}
							/>	 
						}
						centerComponent={{ text: 'Perfil', style: { color: '#fff', fontWeight: 'bold', fontSize: 20 } }}
					/>
					<View style={styles.user}>
							<AvatarIcon style={ styles.avatar}
								title={"db"}
							/>
							<View style={styles.userInfo} >
								<Text style={styles.userName}>Daniel Felipe Bueno</Text>
								<Text style={styles.userEmail}>dafbuenoca@unal.edu.co</Text>
							</View>
					</View>
					<View style={styles.userPreferences}>

					</View>
				
	    </ImageBackground>
  	);
};

export default UserView;