import { useEffect, useState } from 'react';
import {addMeal, getMeals} from '../services/mealService';
export default function AddMealForm(props) {
    let newRecipe = {};
    let [meals, setMeals] = useState([]);

    useEffect(() => {
        getMeals().then(result => {
            if (result)
                setMeals(result)
        })
    }, [meals]);

    function nameExists(name) {
        if(meals.filter(meal => meal.name == name).length > 0) {
            return true;
        } else {
            return false
        }
        
    }

    function recipeIsReady(){
        if(newRecipe.hasOwnProperty('name') && newRecipe.hasOwnProperty('serving') && newRecipe.hasOwnProperty('carbs'))
        if(newRecipe.name !== "" && newRecipe.serving !== "" && newRecipe.carbs !== ""){
            return true;
        } 
        return false;
    }


 
    function onBlur(e) {
        newRecipe[e.target.name] = e.target.value;
        if (recipeIsReady() && !nameExists(newRecipe.name)) {
            addMeal(newRecipe);
            newRecipe = {};
            e.target.value = "";
        }
    }
    
    return (
            <center>
                <label>Name of meal</label>
                <input
                    name="name"
                    type="text"
                    className="form-control validate"
                    id="name"
                    required
                    style={{
                        'backgroundColor': '#54657d',
                        color: '#fff',
                        border: 0
                    }}
                    onBlur={(e) => {onBlur(e)}}

                />
                <label>Serving in g.</label>
                <input
                    name="serving"
                    type="number"
                    className="form-control validate"
                    id="serving"
                    required
                    style={{
                        'backgroundColor': '#54657d',
                        color: '#fff',
                        border: 0
                    }}
                    onBlur={(e) => {onBlur(e)}}

                />
                <label>Carbs in g.</label>
                <input
                    name="carbs"
                    type="number"
                    className="form-control validate"
                    id="carbs"
                    required
                    style={{
                        'backgroundColor': '#54657d',
                        color: '#fff',
                        border: 0
                    }}
                    onBlur={(e) => {onBlur(e)}}


                />
            </center>
    );
}