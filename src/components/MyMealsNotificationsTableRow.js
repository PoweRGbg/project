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
  return (
    <tr>
      <td className="tm-product-name">
        <b>{notification?.who}</b> {notification.text}
      </td>
      <td className="text-center">{daysAgo? daysAgo+" d ": ""}{hoursAgo? hoursAgo+" h ": ""}{minAgo} m ago.</td>
    </tr>
  );
}
