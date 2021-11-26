import { Link } from "react-router-dom";
import "./MealsTableRow.css";

export default function MealsTableRow({ meal, onDelete }) {
  function convertDate() {
    let date = new Date(meal._createdOn);
    return date.toDateString();
  }

  function handleButtonClick(meal){
    console.log(JSON.stringify(meal));
  }
  return (
    <tr>
      <th scope="row">
        <input type="checkbox" id={meal._id} name={meal._id} />
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
          <i className="far fa-trash-alt tm-product-delete-icon" onClick={handleButtonClick(meal._id)}></i>
        </Link>
      </td>
    </tr>
  );
}
