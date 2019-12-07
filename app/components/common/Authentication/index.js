import { endPoint, auth_register, auth_login } from '../../../config/routes';

export async function login(email, password){
    let complete_url = `${endPoint}${auth_login}`;

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