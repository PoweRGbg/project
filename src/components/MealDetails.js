import AuthContext from "../contexts/AuthContext";
import { useEffect, useState, useContext } from "react";
import { getMealById, deleteMeal } from "../services/mealService";
import CommentsCard from "./CommentsCard";
import ConfirmDialog from "./ConfirmDialog.js";
import { useHistory } from "react-router-dom";
import "../css/fontawesome.min.css";
import "../css/bootstrap.min.css";
import "../css/templatemo-style.css";

export default function MealDetails({ match }) {
  const [meal, setMeal] = useState([]);
  const { user } = useContext(AuthContext);
  let historyHook = useHistory();
  const [note, setNote] = useState("");
  const [toDelete, setToDelete] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let result = await getMealById(match.params.mealId);
      return result;
    }
    fetchData()
      .then((result) => {
        if (!result.message && !Array.isArray(result.ingredients) ) {
          result.ingredients = result.ingredients.split("\r");
        }
        setMeal(result);
      })
      .then(window.scrollTo(0, 0));
  }, [match.params.mealId, user]);

  function editButtonHandler(e) {
    e.preventDefault();
    historyHook.push(`/edit/${meal._id}`);
  }

  function deleteButtonHandler(e) {
    e.preventDefault();
    setToDelete(meal);
    setNote(`Are you sure you want to remove meal ${meal.name}?`);
  }

  function goBackHandler(e) {
    e.preventDefault();
    historyHook.goBack();
  }

  async function deleteHandler() {
    await deleteMeal(meal, user);
    historyHook.push(`/meals/mymeals`);
  }

  const ownerButtons = (
    <div className="col-6">
      <button
        type="submit"
        className="btn btn-primary btn-block text-uppercase"
        onClick={editButtonHandler}
      >
        Edit
      </button>
      <button
        type="submit"
        className="btn btn-primary btn-block text-uppercase"
        onClick={deleteButtonHandler}
      >
        Delete
      </button>
    </div>
  );
  return meal.name === undefined ? (


    <div className="container tm-mt-big tm-mb-big">
      <div className="row">
        <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
          <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
            <div className="row">
              <div className="col-12"></div>
            </div>
            <div className="row tm-edit-product-row">
              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="form-group mb-3">
                  <center>ERROR FETCHING MEAL!</center>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <>
    <ConfirmDialog show={note} onClose={() => setNote(false)} onSave={deleteHandler} text={note} />
    <div className="container tm-mt-big tm-mb-big">
      <div className="row">
        <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
          <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
            <div className="row"></div>
            <div className="row tm-edit-product-row">
              <div className="tm-product-img-edit mx-auto">
                <img
                  src={meal.imageURL}
                  alt="MealShot"
                  className="img-fluid d-block mx-auto"
                />
              </div>
              <div className="col-xl-6 col-lg-6 col-md-12">
                <div className="form-group mb-3">
                  <label htmlFor="name">Meal Name</label>
                  <h4 className="form-control">{meal.name}</h4>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="description">Description</label>
                  <h5 className="form-control">{meal.description}</h5>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="ingredients">Ingredients needed</label>
                  <ul className="form-control">
                    {meal.ingredients.map((ingredient) => (
                      <li key={ingredient.length+Date.now()}>{ingredient}</li>
                    ))}
                  </ul>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="recipe">Preparation</label>
                  <h5 className="form-control">{meal.recipe}</h5>
                </div>

                <div className="row">
                  <div className="custom-file mt-3 mb-3">
                    {meal._ownerId === user._id ? ownerButtons : ""}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CommentsCard meal={meal} />

          <div className="container tm-mt-big tm-mb-big">
            <div className="row custom-file mt-3 mb-3 col-3">
              <button
                type="submit"
                className="btn btn-primary btn-block text-uppercase col-6"
                onClick={goBackHandler}
              >
                Go back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
