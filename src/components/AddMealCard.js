import '../css/herostyle.css';
import { isAuth } from "../hoc/AuthHoc";
import  AddMealForm  from './AddMealForm';

function AddMealCard() {

    return (
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
            <div className="tm-bg-primary-dark tm-block">
                <div className="col-12 text-center">
                    <h2 className="tm-block-title mb-4">Add meal</h2>
                    <table className="media tm-notification-item ">
                        <tbody>
                            <tr>
                                <td><AddMealForm /></td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );



}

const WrappedComponent = isAuth(AddMealCard);
export default WrappedComponent;

