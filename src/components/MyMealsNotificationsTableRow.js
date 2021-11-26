import { Link } from "react-router-dom";

export function MyMealsNotificationsTableRow({ notification }) {
  let minAgo = Math.floor((Date.now() - notification.date) / 1000 / 60);
  let hoursAgo;
  let daysAgo;
  if (minAgo > 60) {
    hoursAgo = Math.floor(minAgo / 60);
    minAgo = minAgo % 60;
  }
  if (hoursAgo > 24) {
    daysAgo = Math.floor(hoursAgo / 24);
    hoursAgo = hoursAgo % 24;
  }
//   console.log(`Notification is: ` + JSON.stringify(notification));
  return (
    <tr>
      <td className="tm-product-name">
        <b>{notification?.who}</b> {notification.text}
        <Link
          to={`/meals/${notification.recipe}`}
          className="tm-notification-link"
        >
          {notification.recipeName}
        </Link>
      </td>
      <td className="text-center">
        {daysAgo ? daysAgo + " d " : ""}
        {hoursAgo ? hoursAgo + " h " : ""}
        {minAgo} m ago.
      </td>
    </tr>
  );
}
