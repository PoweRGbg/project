import MealsTable from "./MealsTable";
import AuthContext from "../contexts/AuthContext";
import { useContext } from "react";
// import LoginForm from './LoginForm';

export default function Content() {
    const {user} = useContext(AuthContext);

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {user.email != null
                    ? <p className="text-white mt-5 mb-5">Welcome back, <b>{user.email}</b></p>
                    : <p className="text-white mt-5 mb-5">Welcome to <b>Meals</b></p>
                    }
                </div>
            </div>
            <div className="row tm-content-row">
                <MealsTable title="Latest meals" />
            </div>
        </div>
    );
}