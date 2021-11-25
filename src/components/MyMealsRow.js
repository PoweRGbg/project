import { Link } from "react-router-dom";
import "./MealsTableRow.css";

export default function MealsTableRow({ meal }) {
  function convertDate() {
    let date = new Date(meal._createdOn);
    return date.toDateString();
  }
  return (
    <tr>
      <th scope="row">
        <input type="checkbox" />
      </th>
      <td className="tm-product-name">
        <Link to={"/meals/" + meal._id} className="tm-notification-link" >
          {meal.name}
        </Link>
      </td>
      <td>{meal.description}</td>
      <td>{convertDate()}</td>
      <td>
        <Link to={"/meals/" + meal._id} className="tm-product-delete-link">
          <i className="far fa-trash-alt tm-product-delete-icon"></i>
        </Link>
      </td>
    </tr>
  );
}