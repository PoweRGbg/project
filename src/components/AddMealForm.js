import AuthContext from "../contexts/AuthContext";
import { useContext, useState } from "react";
import { addMeal } from "../services/mealService";
import { useHistory } from "react-router-dom";

export default function AddMealForm() {
  const [ingredients, setIngredients] = useState([]);
  const [ingredient, setIngredient] = useState("");
  let historyHook = useHistory();
  const { user } = useContext(AuthContext);

  function onSubmit(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    let newRecipe = {
      name: formData.get("name"),
      description: formData.get("description"),
      ingredients: ingredients,
      imageURL: formData.get("imageURL"),
      recipe: formData.get("preparation"),
    };
    addMeal(newRecipe, user).then(() => {
      console.log(`added ${newRecipe.name} to database`);
      historyHook.push("/meals/mymeals");
    });
  }

  function handleIngredientChange(e) {
    e.preventDefault();
    if (e.target.value.length > -1) {
      setIngredient(e.target.value);
    }
  }

  function addIngredient(e) {
    e.preventDefault();
    if (ingredient !== "") {
      let newIngredients = ingredients;
      newIngredients.push(ingredient);
      setIngredients(newIngredients);
      setIngredient("");
    }
    console.log(`Ingredients are ${ingredients}`);
  }

  function removeIngredient(e, indexOfIngredient) {
    e.preventDefault();
    let newIngredients = ingredients;
    newIngredients.splice(indexOfIngredient, 1);
    setIngredients([...newIngredients]);
  }

  const handleChange = (e) => {};

  return (
    <div className="col-12 tm-block-col">
      <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-scroll">
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
            name="imageURL"
            type="text"
            className="form-control validate"
            id="imageURL"
            required
            onChange={handleChange}
            style={{
              backgroundColor: "#54657d",
              color: "#fff",
              border: 0,
            }}
          />
          <label className="tm-block-list">Ingredient</label>
          <input
            name="ingredient"
            type="text"
            className="form-control validate"
            id="ingredient"
            value={ingredient}
            onChange={handleIngredientChange}
            style={{
              backgroundColor: "#54657d",
              color: "#fff",
              border: 0,
            }}
            placeholder="Ingredient"
          />
          <button
            className="btn btn-primary btn-block text-uppercase"
            onClick={addIngredient}
            style={{
              height: "30px",
              width: "120px",
              padding: "0",
            }}
          >
            Add ingredient
          </button>
          <label className="tm-block-list">Ingredients list</label>
          <ul>
            {ingredients.map((x) => {
              return (
                <li key={ingredients.indexOf(x)}>
                  {x+" "}
                  <button
                    className="btn-tiny btn btn-primary"
                    onClick={(e) => removeIngredient(e, ingredients.indexOf(x))}
                    style={{
                        padding:"0"
                    }}
                  >
                    remove
                  </button>
                </li>
              );
            })}
          </ul>
          <label className="tm-block-list">Preparation</label>
          <textarea
            name="preparation"
            type="text"
            className="form-control validate"
            id="preparation"
            required
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
      </div>
    </div>
  );
}
