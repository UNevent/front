import { endPoint, auth_register, auth_validate_session, auth_login, auth_out } from '../../../config/routes';
import { AsyncStorage } from "react-native";

async function saveToken(token, client){
    if(token && client){
        AsyncStorage.setItem('token', token);
        AsyncStorage.setItem('client', client);
    }
}

export async function login(email, password){
    const complete_url = `${endPoint}${auth_login}`;

    return fetch(complete_url, {
        method: 'POST',
        headers: {
        Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    }).then(
        (response) => (
            saveToken(response.headers.map["access-token"], response.headers.map["client"]),
            response.json()
        )
    ).then(
        (responseJson) => {
            return responseJson;
        }
    ).catch(
        (error) => {
            console.error(error);
        }
    );
}

export async function validateSession(token, client, uid){
    const complete_url = `${endPoint}${auth_validate_session}`;

    return fetch(complete_url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
                'Content-Type': 'application/json',
            "access-token": token,
            uid: uid,
            client: client,
        }
    }).then(
        (response) => response.json()
    ).then(
        (responseJson) => {
            return responseJson;
        }
    ).catch(
        (error) => {
            console.error(error);
        }
    );
}

export async function register(email, password, passwordConfirm){
    const complete_url = `${endPoint}${auth_register}`;

    return fetch(complete_url, {
        method: 'POST',
        headers: {
        Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
            password_confirmation: passwordConfirm
        }),
    }).then(
        (response) => (
            response.json()
        )
    ).then(
        (responseJson) => {
            return responseJson;
        }
    ).catch(
        (error) => {
            console.error(error);
        }
    );
}

export async function logout(token, client, uid){
    const complete_url = `${endPoint}${auth_out}`;

    return fetch(complete_url, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
                'Content-Type': 'application/json',
            "access-token": token,
            uid: uid,
            client: client,
        }
    }).then(
        (response) => response.json()
    ).then(
        (responseJson) => {
            return responseJson;
        }
    ).catch(
        (error) => {
            console.error(error);
        }
    );
}