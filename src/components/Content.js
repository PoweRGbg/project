import MealsTable from "./MealsTable";
// import LoginForm from './LoginForm';

export default function content() {

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className="text-white mt-5 mb-5">Welcome back, <b>UserName</b></p>
                </div>
            </div>
            <div className="row tm-content-row">
                {/* <LoginForm /> */}

                <MealsTable title="Latest meals" />
            </div>
        </div>
    );
}