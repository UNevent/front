import React, { useState, useEffect } from "react";
import { View, Text, ImageBackground } from "react-native";
import styles  from './styles';
import Images from '../../../assets/Images';
import AvatarIcon from "../../common/AvatarIcon";
import LoadingView from '../LoadingView';

import { useSelector } from 'react-redux';
import { validateSession } from "../../common/Authentication";
import { getSession } from '../../../store/selectors'

async const getAuthData = (token, client, user) => {
	return await validateSession(token, client, user);
}

const UserView = ({goToHome}) => {
	[loaded, setLoaded] = useState(false);
	const auth_selector = useSelector(getSession);

	getAuthData(auth_selector.token, auth_selector.client, auth_selector.user).then(
		(response) => console.log
	);

	if(loaded){
		return (	    
			<ImageBackground source={Images.backmap} style={styles.backmap}>
					<View style={styles.user}>
							<AvatarIcon style={ styles.avatar}
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
	}
	
	return <LoadingView/>
};

export default UserView;