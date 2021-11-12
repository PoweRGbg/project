export default function NotificationsListItem({ notification }) {
  let minAgo = Math.floor(((Date.now() - notification.date) / 1000) / 60);
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
    <div className="media tm-notification-item">
      <div className="tm-gray-circle"><img src="img/notification-01.jpg" alt="Avatar" className="rounded-circle" /></div>
      <div className="media-body">
        <p className="mb-2"><b>{notification?.who}</b> {notification.text} <a href="/"
          className="tm-notification-link">{notification.recipeName}</a></p>
        <span className="tm-small tm-text-color-secondary">{daysAgo? daysAgo+" d ": ""}{hoursAgo? hoursAgo+" h ": ""}{minAgo} m ago.</span>
      </div>
    </div>
  )
}