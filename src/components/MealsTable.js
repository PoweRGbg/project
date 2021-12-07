import { useState, useEffect } from "react";
import { getMeals } from "../services/mealService";
import MealsTableRow from "./MealsTableRow";

export default function MealsTable({ results, clearResult }) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    if (results.length > 0) {
      setMeals(results);
    } else {
      getMeals().then((result) => {
        if (result) setMeals(result);
      });
    }
  }, [results]);

  function goBack(e) {
    e.preventDefault();
    clearResult([]);
  }

  return (
    <div className="col-12 tm-block-col">
      <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-scroll">
        {results.length ? (
          <h2 className="tm-block-title">Search results:</h2>
        ) : (
          <h2 className="tm-block-title">Meals List</h2>
        )}
        <table className="table table-hover tm-table-small tm-product-table">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">NAME</th>
              <th scope="col">DESCRIPTION</th>
            </tr>
          </thead>
          <tbody>
            {meals.length > 0 &&
              meals.map((meal) => <MealsTableRow meal={meal} key={meal._id} />)}
          </tbody>
        </table>
      </div>
      {results.length ? (
        <button
          type="submit"
          className="btn btn-primary btn-block text-uppercase col-6"
          onClick={goBack}
        >
          Go back
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}
