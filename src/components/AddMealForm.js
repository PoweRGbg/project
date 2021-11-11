import { useEffect } from 'react';
import {addMeal, getMeals} from '../services/mealService';
export default function AddMealForm(props) {
    let newRecipe = {};

    useEffect(() => {
        getMeals();
    }, []);

    function recipeIsReady(){
        if(newRecipe.name && newRecipe.serving && newRecipe.carbs){
            return true;
        } 
        return false;
    }


 
    function onBlur(e) {
        newRecipe[e.target.name] = e.target.value;
        console.log("Name of input:"+e.target.name);

        if (recipeIsReady) {
            addMeal(newRecipe);
        }
    }
    
    return (
        <div>
            <center>
                <label for="name">Name of meal</label>
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
                <label for="serving">Serving in g.</label>
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
                <label for="carbs">Carbs in g.</label>
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
        </div>
    );
}