import React, { useState } from "react";
import LogoutView from '../../components/views/LogoutView';
import LoadingView from '../../components/views/LoadingView';
import { logout } from '../../components/common/Authentication';
import { AsyncStorage } from "react-native";

import { useSelector } from 'react-redux';
import { getSession } from '../../store/selectors';

const LogoutScreen = ({ navigation }) => {
    const session_selector = useSelector(getSession);

    [isOut, setIsOut] = useState(false);

    logout(session_selector.token, session_selector.client, session_selector.user).then(
        (response) => {
            AsyncStorage.setItem('usr', "");
            AsyncStorage.setItem('pw', "");
            AsyncStorage.setItem('token', "");
            AsyncStorage.setItem('client', "");

            if(!response.error && response.success){
                setIsOut(true);
            }
        }
    );

    if(!isOut){
        return <LoadingView/>;
    }
    
    return <LogoutView goToFirstLogin={() => navigation.navigate('Enter')}/>;
}

export default LogoutScreen;