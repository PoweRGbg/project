import NotificationsListItem from "./NotificationsListItem"
import { useState, useEffect } from 'react';
import { getNotifications } from '../services/notificationService';

export default function NotificationsList() {
  let [notifications, setNotifications] = useState([]);

  useEffect(() => {
    getNotifications().then(result => {
      setNotifications(result);
    }
    )
  }, []);

  return (
    <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
      <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-overflow">
        <h2 className="tm-block-title">Notification List</h2>
        <div className="tm-notification-items">
          {notifications.map(notification =>
            <NotificationsListItem
              notification={notification}
            />)}

        

        </div>
      </div>
    </div>
  );
}