import { useEffect, useState } from "react";
import { getMealById, deleteMeal } from "../services/mealService";
import AddComment from "./AddComment";
import CommentsCard from "./CommentsCard";
import { useHistory } from "react-router-dom";

export default function MealDetails({ match }) {
    let [meal, setMeal] = useState([]);
    let historyHook = useHistory();

    useEffect(() => {
        async function fetchData(){

            let result = await getMealById(match.params.mealId);
            return result;
        }
        fetchData().then(result =>{
            setMeal(result);
        })

}, [match.params.mealId]);

function editButtonHandler(e){
    e.preventDefault();
    historyHook.push(`/edit/${meal._id}`)
}
function deleteButtonHandler(e){
    e.preventDefault();
    deleteMeal(meal);
    historyHook.push(`/allmeals`)
}

return (
    <div>
        <div className="container tm-mt-big tm-mb-big" >
            <div className="row">
                <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
                    <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="tm-block-title d-inline-block">Meal Details</h2>
                            </div>
                        </div>
                        <div className="row tm-edit-product-row">
                            <div className="col-xl-6 col-lg-6 col-md-12">
                                <div className="form-group mb-3 col-12">
                                    <label
                                        htmlFor="name"
                                    >Meal Name
                                    </label>
                                    <h3>{meal.name}</h3>
                                </div>
                                <div className="form-group mb-3 col-12">
                                    <label
                                        htmlFor="description"
                                    >description</label>
                                    <h3>{meal.description}</h3>

                                </div>

                                <div className="form-group mb-3 col-12">
                                    <label
                                        htmlFor="Ingredients"
                                    >Ingredients</label>
                                    <h3>{meal.ingredients}</h3>

                                </div>
                                <div className="form-group mb-3 col-12">
                                    <label
                                        htmlFor="preparation"
                                    >Preparation</label>
                                    <h3>{meal.recipe}</h3>

                                </div>

                                {meal._ownerId === sessionStorage.getItem('userId')?
                                <button className="btn btn-primary btn-block text-uppercase" onClick={editButtonHandler}>
                                Edit
                                </button>
                                :""}
                                {meal._ownerId === sessionStorage.getItem('userId')?
                                <button className="btn btn-primary btn-block text-uppercase" onClick={deleteButtonHandler}>
                                Delete
                                </button>
                                :""}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
        {meal._id ?<CommentsCard meal={meal._id}/>:""}
        
        <AddComment meal={meal} />
    </div>
);
}
