import MealsTable from "./MealsTable";
import AuthContext from "../contexts/AuthContext";
import { useContext, useState } from "react";
import SearchBox from "./SearchBox";
// import LoginForm from './LoginForm';

export default function Content() {
    const [results, setResults] = useState([]);
    const {user} = useContext(AuthContext);

    function searchResult(mealsArray){
        if(mealsArray.length > 0){
            setResults(mealsArray);
        }
    }

    function clearResult(){
        setResults([]);
    }

    return (
        <div className="container">
            <div className="row" style={{
              paddingBottom: "10px",

            }}>
                <div className="col">
                    {user.email != null
                    ? <p className="text-white">Welcome back, <b>{user.email}</b></p>
                    : <p className="text-white">Welcome to <b>Meals</b></p>
                    }
                </div>
                <div className="col">
                    <SearchBox searchResult={searchResult}></SearchBox>
                </div>
            </div>
            <div className="row tm-content-row">
                <MealsTable title="Latest meals" results={results} clearResult={clearResult}/>
            </div>
        </div>
    );
}