import { url } from '../config/configuration.js'
import { addNotification } from './notificationService.js'

export const addComment = async (comment) => {
    try {
        let response = await fetch(url + "/comments", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(comment)
        });
        let result = await response.json();
        createNotification(comment);
        return result;
    } catch (error) {
        console.error(error)
    };

}

export async function getComments(mealId) {
    
    const commentsUrl = url + `/comments?where=meal%3D%22${mealId}%22`;
    // const commentsUrl = url + `/comments`;
    try {

        let comments = await fetch(commentsUrl , {
            method: 'GET'
        });
        let result = await comments.json();
        let arrayOfResults = Object.values(result).filter(x=> x.meal === mealId);
        return arrayOfResults;

    } catch (error) {
        console.error(`Failed fetching comments! ${error}`);
    }
}


export function createNotification(comment) {
    let notification =
    {
        who: "User name",
        dateString: Date.now().toString(),
        date: Date.now(),
        text: `Commented on `,
        recipe: comment.meal,
    }
    addNotification(notification);
}