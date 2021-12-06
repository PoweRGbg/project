import '../css/herostyle.css';
import { isAuth } from "../hoc/AuthHoc";
import  AddMealForm  from './AddMealForm';

function AddMealCard() {

    return (
        <div className="col-12 tm-block-col">
            <div className="tm-bg-primary-dark tm-block tm-block-taller tm-block-scroll">
                                <AddMealForm />

            </div>
        </div>
    );



}

const WrappedComponent = isAuth(AddMealCard);
export default WrappedComponent;

