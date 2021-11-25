import MealsTable from "./MealsTable";
// import LoginForm from './LoginForm';

export default function content() {
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    {sessionStorage.getItem('email') != null
                    ? <p className="text-white mt-5 mb-5">Welcome back, <b>{sessionStorage.getItem('email')}</b></p>
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