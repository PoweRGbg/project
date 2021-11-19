import { Link } from "react-router-dom";

export default function MealsTableRow({ meal }) {


  return ( <tr>
    <th scope="row"><b>{meal.id}</b></th>
    <td><b><Link to={`/meal/${meal._id}`}> {meal.name}</Link></b></td>
    <td><b>{meal.serving}</b></td>
    <td><b>{meal.carbs}</b></td>
  </tr>)
}