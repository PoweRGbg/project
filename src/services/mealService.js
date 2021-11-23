import uniqid from 'uniqid';
import { databaseUrl as url } from '../config/configuration.js'
import { addNotification } from './notificationService.js'
import * as data from "../api/data.js";

export const addMeal = async (meal) => {
    try {
        meal.id = uniqid();
        let response = await fetch(url + "data/meals", {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'X-Authorization': sessionStorage.getItem('userToken')
            },
            body: JSON.stringify(meal)
        });
        let result = await response.json();
        createNotification(meal);
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

export function createNotification(meal) {
    let notification =
    {
        who: sessionStorage.getItem('email'),
        dateString: Date.now().toString(),
        date: Date.now(),
        text: `Added ${meal.name}`,
        recipe: meal.id,
    }
    addNotification(notification);
}