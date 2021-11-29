import AuthContext from "../contexts/AuthContext";
import { useEffect, useState, useContext } from "react";
import { addMeal, getMeals } from "../services/mealService";
import { useHistory } from "react-router-dom";

export default function AddMealForm({ history }) {
  let historyHook = useHistory();
  let [meals, setMeals] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    getMeals().then((result) => {
      if (result) setMeals(result);
    });
  }, []);
 

  function onSubmit(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let newRecipe = {
      name: formData.get("name"),
      description: formData.get("description"),
      ingredients: formData.get("ingredients"),
      imageURL: formData.get("imageUrl"),
      recipe: formData.get("preparation"),
    };
      addMeal(newRecipe, user);
      console.log(`added ${newRecipe.name} to database`);
      meals.push(newRecipe);
      historyHook.push("/allmeals");
  }

  const handleChange = (e) => {
  };
  
  return (
    <form
      action=""
      method="POST"
      onSubmit={(e) => {
        onSubmit(e);
      }}
    >
      <label className="tm-block-list">Name of meal</label>
      <input
        name="name"
        type="text"
        className="form-control validate"
        id="name"
        required
        style={{
          backgroundColor: "#54657d",
          color: "#fff",
          border: 0,
        }}
        onChange={handleChange}
      />
      <label className="tm-block-list">Short description</label>
      <input
        name="description"
        type="text"
        className="form-control validate"
        id="description"
        required
        onChange={handleChange}
        style={{
          backgroundColor: "#54657d",
          color: "#fff",
          border: 0,
        }}
      />
      <label className="tm-block-list">Image</label>
      <input
        name="imageUrl"
        type="text"
        className="form-control validate"
        id="imageUrl"
        required
        onChange={handleChange}
        style={{
          backgroundColor: "#54657d",
          color: "#fff",
          border: 0,
        }}
      />
      <label className="tm-block-list">Ingredients list</label>
      <textarea
        name="ingredients"
        type="text"
        className="form-control validate"
        id="ingredients"
        required
        onChange={handleChange}
        style={{
          backgroundColor: "#54657d",
          color: "#fff",
          border: 0,
        }}
      />
      <label className="tm-block-list">Preparation</label>
      <textarea
        name="preparation"
        type="text"
        className="form-control validate"
        id="preparation"
        required
        onChange={handleChange}
        style={{
          backgroundColor: "#54657d",
          color: "#fff",
          border: 0,
        }}
      />
      <button
        type="submit"
        className="btn btn-primary btn-block text-uppercase"
      >
        Add recipe
      </button>
    </form>
  );
}
