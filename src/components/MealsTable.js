import { useState, useEffect } from 'react';
import { getMeals} from '../services/mealService';
import MealsTableRow from './MealsTableRow';

export default function MealsTable(props) {
    let [meals, setMeals] = useState([]);

    useEffect(() => {
        getMeals().then(result=>
            setMeals(result)
        )
    }, [meals]);



    return (
        <div className="col-12 tm-block-col">
            <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-scroll">
              <h2 className="tm-block-title">Meals List</h2>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">MEAL NO.</th>
                    <th scope="col">NAME</th>
                    <th scope="col">SERVING</th>
                    <th scope="col">CARBS</th>
                  </tr>
                </thead>
                <tbody>
                    {meals.map(meal => <MealsTableRow meal={meal} key={meal._id}/>)}
                  
                </tbody>
              </table>
            </div>
          </div>
    );
}