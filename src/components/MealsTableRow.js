import { Link } from "react-router-dom";

export default function MealsTableRow({ meal }) {

  return ( <tr>
    <td></td>
    <td><b><Link className="tm-notification-link" to={`/meal/${meal._id}`}> {meal.name}</Link></b></td>
    <td><b>{meal.description}</b></td>
  </tr>)
}