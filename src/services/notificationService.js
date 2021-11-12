import uniqid from 'uniqid';
import { url } from '../config/configuration.js'

export const addNotification = async (notification) => {
    // notification = [
    //     {
    //         who: "User name",
    //         dateString: Date.now().toString(),
    //         date: Date.now(),
    //         text: "Addied ",
    //         recipe: "recipeId",
    //     }
    // ]
    try {
        notification.id = uniqid();
        let response = await fetch(url + "/notifications", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(notification)
        });
        let result = await response.json();
        console.log(`Server returned  notification ${JSON.stringify(result)}`);
        return result;
    } catch (error) {
        console.error(error)
    };

}

export async function getNotifications () {
    let notifications = await fetch(url + "/notifications", {
        method: 'GET'
    });
    let result = await notifications.json();
    return Object.values(result);
}