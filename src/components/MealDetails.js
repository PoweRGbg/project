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
    <div className="container tm-mt-big tm-mb-big">
      <div className="row">
        <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
          <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
            <div className="row">
              <div className="col-12">
              </div>
            </div>
            <div className="row tm-edit-product-row">
            <div className="tm-product-img-edit mx-auto">
                  <img src={meal.imageURL} alt="MealShot" className="img-fluid d-block mx-auto"/>
                  <i
                    className="fas fa-cloud-upload-alt tm-upload-icon"
                    onclick="document.getElementById('fileInput').click();"
                  ></i>
                </div>
              <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="form-group mb-3">
                    <label
                      for="name"
                      >Meal Name
                    </label>
                    <h4>{meal.name}</h4>
                  </div>
                  <div className="form-group mb-3">
                    <label
                      for="description"
                      >Description</label
                    >
                    <h5>{meal.description}</h5>
                  </div>
                  <div className="form-group mb-3">
                    <label
                      for="ingredients"
                      >Ingredients needed</label
                    >
                    <h5>{meal.ingredients}</h5>
                  </div>
                  <div className="form-group mb-3">
                    <label
                      for="recipe"
                      >Preparation</label
                    >
                    <h5>{meal.recipe}</h5>
                  </div>
                  
                  <div className="row">
                      
                  <div className="custom-file mt-3 mb-3">
                  
                  {meal._ownerId === sessionStorage.getItem('userId')
                    ?
                    <div className="col-6">
                        <button type="submit" className="btn btn-primary btn-block text-uppercase" onClick={editButtonHandler}>Edit</button>
                        <button type="submit" className="btn btn-primary btn-block text-uppercase" onClick={deleteButtonHandler}>Delete</button>
                    </div>
                    :""
                  }
                </div>
                  </div>
                  
              </div>
            </div>
        </div>
            <AddComment meal={meal}/>
            <CommentsCard meal={meal}/>
        </div>
      </div>
    </div>
);
}
