export default function NotificationsListItem({notification}){
  console.log(`Notification is: ${notification}`);
    return (
        <div className="media tm-notification-item">
              <div className="tm-gray-circle"><img src="img/notification-01.jpg" alt="Avatar" className="rounded-circle" /></div>
              <div className="media-body">
                <p className="mb-2"><b>{notification?.who}</b> {notification.text} <a href="/"
                  className="tm-notification-link">{notification?.recipe}</a></p>
                <span className="tm-small tm-text-color-secondary">{notification?.date}.</span>
              </div>
            </div>
    )
}