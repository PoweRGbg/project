import OrderList from "./OrdersList";
import ContentCard from "./ContentCard";
import NotificationsList from "./NotificationsList";

export default function content() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className="text-white mt-5 mb-5">Welcome back, <b>Admin</b></p>
                </div>
            </div>
            <div className="row tm-content-row">
                <ContentCard />
                <ContentCard />
                <ContentCard />

                <NotificationsList />
                <OrderList />
            </div>
        </div>
    );
}