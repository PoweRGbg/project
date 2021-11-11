export default function MealsTableRow({meal}){


    return <tr>
    <th scope="row"><b>{meal.id}</b></th>
    <td>
      <div className="tm-status-circle moving">
      </div>Moving
                    </td>
    <td><b>{meal.name}</b></td>
    <td><b>{meal.serving}</b></td>
    <td><b>{meal.carbs}</b></td>
  </tr>
}