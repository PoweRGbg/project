import { useEffect, useState } from "react";
import { getMealById } from "../services/mealService";
import AddComment from "./AddComment";
import CommentsCard from "./CommentsCard";
export default function MealDetails({ match }) {
    let [meal, setMeal] = useState([]);

    useEffect(() => {
        async function fetchData(){

            let result = await getMealById(match.params.mealId);
            return result;
        }
        fetchData().then(result =>{
            setMeal(result);
        })

}, [match.params.mealId]);

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
                                    >Serving</label>
                                    <h3>{meal.serving}</h3>

                                </div>
                                <div className="form-group mb-3 col-12">
                                    <label
                                        htmlFor="description"
                                    >Carbs per serving</label>
                                    <h3>{meal.carbs}</h3>

                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div >
        <CommentsCard meal={meal}/>
        <AddComment meal={meal} />
    </div>
);
}
