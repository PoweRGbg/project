import { databaseUrl as url } from '../config/configuration.js'
import { addNotification } from './notificationService.js'
import * as data from "../api/data.js";

export const addMeal = async (meal, user) => {
    try {
        let response = await fetch(url + "data/meals", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': user.accessToken
            },
            body: JSON.stringify(meal)
        });
        let result = await response.json();
        createNotification(result, user);
        return result;
    } catch (error) {
        console.error(error)
    };

}
export const editMeal = async (meal, user) => {
    try {
        let response = await fetch(url + "data/meals/"+meal._id, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': user.accessToken
            },
            body: JSON.stringify(meal)
        });
        let result = await response.json();
        // Notification for Edit
        let notification =
        {
            who: user.email,
            dateString: Date.now().toString(),
            date: Date.now(),
            text: `Editted `,
            recipe: meal._id,
            recipeName: meal.name,
        }
        addNotification(notification);
        return result;
    } catch (error) {
        console.error(error)
    };

}

export const deleteMeal = async (meal, user) => {
    try {
        let response = await fetch(url + "data/meals/"+meal._id, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': user.accessToken
            },
            body: JSON.stringify(meal)
        });
        let result = await response.json();
        // Notification for Edit
        let notification =
        {
            who: user.email,
            dateString: Date.now().toString(),
            date: Date.now(),
            text: `Deleted `,
            recipe: meal._id,
            recipeName: meal.name,
        }
        addNotification(notification);
        return result;
    } catch (error) {
        console.error(error)
    };

}

export async function getMeals() {
    try {
        let meals = await data.getMeals();
        // let result = await meals.json();
        return meals;

    } catch (error) {
        console.error('Failed fetching meals!');
    }
}

export async function getMealById(id) {
    try {
        let meals = await fetch(url + "data/meals/"+id, {
            method: 'GET'
        });
        let result = await meals.json();

        return result;

    } catch (error) {
        console.error(`Failed fetching meal ${id}!`);
    }
}

export async function getMealsByOwner(ownerId) {
    try {
        let meals = await data.getMyMeals(ownerId);
        return meals;

    } catch (error) {
        console.error('Failed fetching meals for '+ownerId);
    }
}

export function createNotification(meal, user) {
    let notification =
    {
        who: user.email,
        dateString: Date.now().toString(),
        date: Date.now(),
        text: `Added `,
        recipe: meal._id,
        recipeName: meal.name,
    }
    addNotification(notification);
}