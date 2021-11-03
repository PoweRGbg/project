export default function NotificationsListItem(){
    return (
        <div className="media tm-notification-item">
              <div className="tm-gray-circle"><img src="img/notification-01.jpg" alt="Avatar" className="rounded-circle" /></div>
              <div className="media-body">
                <p className="mb-2"><b>Jessica</b> and <b>6 others</b> sent you new <a href="/"
                  className="tm-notification-link">product updates</a>. Check new orders.</p>
                <span className="tm-small tm-text-color-secondary">6h ago.</span>
              </div>
            </div>
    )
}