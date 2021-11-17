import MealsTable from "./MealsTable";
// import LoginForm from './LoginForm';

export default function content() {
    // let hero = {
    //     name: "Conan",
    //     strength: 1,
    //     health: 10,
    //     maxHealth: 10,
    //     level: 1,
    //     xp: 0,
    //     nextLevelXp: 30,
    //     skillPointsAvailable: 0,
    //     gold: 0,

    // };
    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <p className="text-white mt-5 mb-5">Welcome back, <b>Admin</b></p>
                </div>
            </div>
            <div className="row tm-content-row">
                {/* <LoginForm /> */}

                <MealsTable title="Latest meals" />
            </div>
        </div>
    );
}