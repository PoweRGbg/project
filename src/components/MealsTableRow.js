import { Link } from "react-router-dom";

export default function MealsTableRow({ meal }) {
  function onClickHandler(e){
    console.log(e.target);
  }

  return ( <tr>
    <th scope="row" onClick={(e) => onClickHandler(e)}><b>{meal.id}</b></th>
    <td><b><Link className="tm-notification-link" to={`/meal/${meal._id}`}> {meal.name}</Link></b></td>
    <td><b>{meal.serving}</b></td>
    <td><b>{meal.carbs}</b></td>
  </tr>)
}