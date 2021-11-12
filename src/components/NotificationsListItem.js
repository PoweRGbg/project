export default function NotificationsListItem({notification}){
    return (
        <div className="media tm-notification-item">
              <div className="tm-gray-circle"><img src="img/notification-01.jpg" alt="Avatar" className="rounded-circle" /></div>
              <div className="media-body">
                <p className="mb-2"><b>{notification?.who}</b> {notification.text} <a href="/"
                  className="tm-notification-link">{notification.recipeName}</a></p>
                <span className="tm-small tm-text-color-secondary">{new Date(notification.date).toTimeString()} {new Date(notification.date).toLocaleDateString()}.</span>
              </div>
            </div>
    )
}