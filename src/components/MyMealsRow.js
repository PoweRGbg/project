import { Link } from "react-router-dom";
import "./MealsTableRow.css";

export default function MealsTableRow({ meal, remove }) {

  function convertDate() {
    let date = new Date(meal._createdOn);
    return date.toDateString();
  }

  function del(){
    remove(meal)
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
        {/* <Link to="" className="tm-product-delete-link"> */}
          <i className="far fa-trash-alt tm-product-delete-icon tm-product-delete-link" id={meal._id} name={meal.name} onClick={del}></i>
        {/* </Link> */}
      </td>
    </tr>
  );
}
