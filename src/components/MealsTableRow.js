import { Link } from "react-router-dom";
import './MealsTableRow.css'

export default function MealsTableRow({ meal }) {
  return ( <tr>
    <td><div className="tm-gray-circle"><img src={meal.imageURL} alt="Meal" className="rounded-circle" /></div></td>
    <td><b><Link className="tm-notification-link" to={`/meal/${meal._id}`}> {meal.name}</Link></b></td>
    <td><b>{meal.description}</b></td>
  </tr>)
}