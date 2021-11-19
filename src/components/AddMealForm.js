import { useEffect, useState } from 'react';
import { addMeal, getMeals } from '../services/mealService';
import { useHistory } from 'react-router-dom';

export default function AddMealForm({history}) {
    let historyHook = useHistory();
    let [meals, setMeals] = useState([]);
    let [newRecipe, setNewRecipe] = useState({});

    useEffect(() => {
        getMeals().then(result => {
            if (result)
                setMeals(result);
        })
    }, []);

    function nameExists(name) {
        if (meals.filter(meal => meal.name === name).length > 0) {
            return true;
        } else {
            console.log("Recipe with this name exists");
            return false
        }

    }

    function recipeIsReady() {
        if (newRecipe.hasOwnProperty('name') && newRecipe.hasOwnProperty('serving') && newRecipe.hasOwnProperty('carbs'))
            if (newRecipe.name !== "" && newRecipe.serving !== "" && newRecipe.carbs !== "") {
                return true;
            }
            console.log(JSON.stringify(newRecipe));
            console.log("All fields should bi filled");
        return false;
    }


    function onClickHandler(e) {
        e.preventDefault();
        newRecipe[e.target.name] = e.target.value;
        if (nameExists(newRecipe.name)) {
            console.log('This meal exists already!');
        } else {

            if (recipeIsReady()) {
                addMeal(newRecipe);
                console.log(`added ${newRecipe.name} to database`);
                meals.push(newRecipe);
                historyHook.push('/allmeals');
            }
        }
    }
    const handleChange = (e) =>{
            const name = e.target.name;
            const value = e.target.value;
            setNewRecipe(values => ({...values, [name]: value}))
    }
    return (
        <form action="" method="GET">

                <label className="tm-block-list">Name of meal</label>
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
                    onChange={handleChange}
                    />
                <label className="tm-block-list">Serving in g.</label>
                <input
                    name="serving"
                    type="number"
                    className="form-control validate"
                    id="serving"
                    required
                    onChange={handleChange}

                    style={{
                        'backgroundColor': '#54657d',
                        color: '#fff',
                        border: 0
                    }}
                    />
                <label className="tm-block-list">Carbs in g.</label>
                <input
                    name="carbs"
                    type="number"
                    className="form-control validate"
                    id="carbs"
                    required
                    onChange={handleChange}

                    style={{
                        'backgroundColor': '#54657d',
                        color: '#fff',
                        border: 0
                    }}
                    
                    />
            <button
            type="submit"
            className="btn btn-primary btn-block text-uppercase"
            onClick={(e) => { onClickHandler(e) }}
            >
                Add meal
            </button>
        </form>
        );
    }