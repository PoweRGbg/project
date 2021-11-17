import AddMealForm from "./AddMealForm";
import { useEffect } from "react";

export default function FormWrapper({history}) {
    useEffect(() => {
                console.log(JSON.stringify(history));
        
    }, [history]);
    return (

        <div className="col-12 tm-block-col">
            <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-scroll">
                <AddMealForm />
            </div>

        </div>

        )
}