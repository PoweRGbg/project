import uniqid from 'uniqid';
import { url } from '../config/configuration.js'

export const addMeal = async (meal) => {
    // meal = [
    //     {
    //         type: "meal",
    //         dateString: Date.now().toString(),
    //         date: Date.now(),
    //         meal: 110,
    //         direction: "Flat",
    //         noise: 0,
    //         filtered: 0,
    //         unfiltered: 0,
    //         rssi: 0,
    //     }
    // ]
    try {
        meal.id = uniqid();
        let response = await fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(meal)
        });
        let result = await response.json();
        console.log(`Server returned ${JSON.stringify(result)}`);
        return result;
    } catch (error) {
        console.error(error)
    };

}

export async function getMeals () {
    let meals = await fetch(url, {
        method: 'GET'
    });
    let result = await meals.json();
    return Object.values(result);
}