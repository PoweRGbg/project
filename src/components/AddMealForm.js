import { useEffect } from 'react';
import {addMeal, getMeals} from '../services/mealService';
export default function AddMealForm(props) {
    let newRecipe = {};

    useEffect(() => {
        getMeals();
    }, []);

    function recipeIsReady(){
        if(newRecipe.hasOwnProperty('name') && newRecipe.hasOwnProperty('serving') && newRecipe.hasOwnProperty('carbs'))
        if(newRecipe.name !== "" && newRecipe.serving !== "" && newRecipe.carbs !== ""){
            return true;
        } 
        return false;
    }


 
    function onBlur(e) {
        newRecipe[e.target.name] = e.target.value;

        if (recipeIsReady()) {
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