import uniqid from 'uniqid';
import { url } from '../config/configuration.js'
import { addNotification } from './notificationService.js'

export const addComment = async (comment) => {
    try {
        comment.id = uniqid();
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
    try {
        let comments = await fetch(url + "/comments", {
            method: 'GET'
        });
        let result = await comments.json();
        return Object.values(result);

    } catch (error) {
        console.error('Failed fetching comments!');
    }
}

export async function getCommentById(id) {
    try {
        let comments = await fetch(url + "/comments/"+id, {
            method: 'GET'
        });
        let result = await comments.json();

        return result;

    } catch (error) {
        console.error(`Failed fetching comment ${id}!`);
    }
}

export function createNotification(comment) {
    let notification =
    {
        who: "User name",
        dateString: Date.now().toString(),
        date: Date.now(),
        text: `Commented ${comment.name}`,
        recipe: comment.id,
    }
    addNotification(notification);
}