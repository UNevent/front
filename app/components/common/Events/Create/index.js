import { endPoint, events, imgurAuth, imgur_endpoint, image, upload } from '../../../../config/routes';

export async function newEvent(user_id, place_id, title, date, place_detail, details, poster, tags){
    let complete_url = `${endPoint}${events}`;

    return fetch(complete_url, {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_id: user_id,
          place_id: place_id,
          title: title,
          date: date,
          place_detail: place_detail,
          details: details,
          poster: poster,
          tags: tags
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

export async function uploadImage(base64){
    let complete_url = `${imgur_endpoint}${image}`;
    
    return fetch(complete_url, {
        method: 'POST',
        headers: {
            Authorization: imgurAuth
        },
        body: formData(base64),
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

function formData(base64data){
    const formData = new FormData();
    formData.append('image', base64data);

    return formData;
}
