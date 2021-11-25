import { useState, useEffect } from "react";
import {
  getMealsByOwner,
  getMealById,
  deleteMeal,
} from "../services/mealService";
import MyMealsRow from "./MyMealsRow";

export default function MyMeals(props) {
  let [meals, setMeals] = useState([]);
  let [note, setNote] = useState("");
  let [toDelete, setToDelete] = useState([]);

  useEffect(() => {
    if (sessionStorage.getItem("userId"))
      getMealsByOwner(sessionStorage.getItem("userId")).then((result) => {
        if (result) setMeals(result);
      });
  }, []);

  async function onSubmit(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    var object = {};
    formData.forEach(function (value, key) {
      object[key] = value;
    });
    let forDelete = Object.keys(object);
    if (forDelete.length > 0) {
      let mealsToDelete = await getMeals(forDelete);
      let names = [];
      mealsToDelete.forEach((x) => names.push(x.name));
      setToDelete(mealsToDelete);
      setNote(`Are you sure you want to delete ${names.join(", ")}?`);
    }
  }

  async function yesClickHandler(e) {
    setNote("");
    for (let index = 0; index < toDelete.length; index++) {
      const element = toDelete[index];
      await deleteMeal(element);
    }
    if (sessionStorage.getItem("userId"))
      getMealsByOwner(sessionStorage.getItem("userId")).then((result) => {
        if (result) setMeals(result);
      });
  }
  function noClickHandler(e) {
    setNote("");
  }

  async function getMeals(arrayOfIds) {
    let result = [];
    for (let i = 0; i < arrayOfIds.length; i++) {
      const element = await getMealById(arrayOfIds[i]);
      result.push(element);
    }
    return result;
  }

  return (
    <div className="container mt-5">
      <div className="row tm-content-row">
        <div className="col-sm-12 col-md-12 col-lg-8 col-xl-8 tm-block-col">
          <div className="tm-bg-primary-dark tm-block tm-block-products">
            {note !== "" ? (
              <div>
                <h2 style={{ color: "white" }}>{note}</h2>
                <button
                  className="btn btn-primary btn-block text-uppercase mb-3"
                  onClick={yesClickHandler}
                >
                  Yes
                </button>
                <button
                  className="btn btn-primary btn-block text-uppercase mb-3"
                  onClick={noClickHandler}
                >
                  No
                </button>
              </div>
            ) : (<div>
                <div className="tm-product-table-container">
                <form method="POST" onSubmit={onSubmit}>
                  <table className="table table-hover tm-table-small tm-product-table">
                    <thead>
                      <tr>
                        <th scope="col">&nbsp;</th>
                        <th scope="col">MEAL NAME</th>
                        <th scope="col">DESCRIPTION</th>
                        <th scope="col">DATE ADDED</th>
                        <th scope="col">&nbsp;</th>
                      </tr>
                    </thead>
                    <tbody>
                      {meals.length > 0
                        ? meals.map((meal) => (
                            <MyMealsRow meal={meal} key={meal._id} />
                          ))
                        : ""}
                    </tbody>
                  </table>
                  <button
                    type="submit"
                    className="btn btn-primary btn-block text-uppercase"
                  >
                    Delete selected products
                  </button>
                </form>
              </div>
              <a
                href="/addMeal"
                className="btn btn-primary btn-block text-uppercase mb-3"
              >
                Add new recipe
              </a></div>
            )}
            
          </div>
        </div>
        <div className="col-sm-12 col-md-12 col-lg-4 col-xl-4 tm-block-col">
          <div className="tm-bg-primary-dark tm-block tm-block-product-categories">
            <h2 className="tm-block-title">Notifications</h2>
            <div className="tm-product-table-container">
              <table className="table tm-table-small tm-product-table">
                <tbody>
                  <tr>
                    <td className="tm-product-name">Product Category 1</td>
                    <td className="text-center">
                      <a href="/" className="tm-product-delete-link">
                        <i className="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="tm-product-name">Product Category 2</td>
                    <td className="text-center">
                      <a href="/" className="tm-product-delete-link">
                        <i className="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="tm-product-name">Product Category 3</td>
                    <td className="text-center">
                      <a href="/" className="tm-product-delete-link">
                        <i className="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="tm-product-name">Product Category 4</td>
                    <td className="text-center">
                      <a href="/" className="tm-product-delete-link">
                        <i className="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="tm-product-name">Product Category 5</td>
                    <td className="text-center">
                      <a href="/" className="tm-product-delete-link">
                        <i className="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="tm-product-name">Product Category 6</td>
                    <td className="text-center">
                      <a href="/" className="tm-product-delete-link">
                        <i className="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="tm-product-name">Product Category 7</td>
                    <td className="text-center">
                      <a href="/" className="tm-product-delete-link">
                        <i className="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="tm-product-name">Product Category 8</td>
                    <td className="text-center">
                      <a href="/" className="tm-product-delete-link">
                        <i className="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="tm-product-name">Product Category 9</td>
                    <td className="text-center">
                      <a href="/" className="tm-product-delete-link">
                        <i className="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="tm-product-name">Product Category 10</td>
                    <td className="text-center">
                      <a href="/" className="tm-product-delete-link">
                        <i className="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="tm-product-name">Product Category 11</td>
                    <td className="text-center">
                      <a href="/" className="tm-product-delete-link">
                        <i className="far fa-trash-alt tm-product-delete-icon"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* <!-- table container --> */}
            <button className="btn btn-primary btn-block text-uppercase mb-3">
              Add new category
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
