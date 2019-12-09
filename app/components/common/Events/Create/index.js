import { endPoint, events } from '../../../../config/routes';

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