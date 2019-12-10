import { endPoint, tags, places } from '../../../config/routes';

export async function getTags(){
    const complete_url = `${endPoint}${tags}`;

    return fetch(complete_url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
                'Content-Type': 'application/json',
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

export async function getPlaces(){
    const complete_url = `${endPoint}${places}`;

    return fetch(complete_url, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
                'Content-Type': 'application/json',
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