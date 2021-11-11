import '../css/herostyle.css';
import ValuesList from './ValuesList';

export default function ContentCard(props) {

    return (
        <div className="col-sm-12 col-md-12 col-lg-6 col-xl-6 tm-block-col">
            <div className="tm-bg-primary-dark tm-block">
                <h2 className="tm-block-title">{props.title}</h2>
                <div className="col-12 text-center">
                    <h2 className="tm-block-title mb-4">Nigthscout monitor</h2>
                    <table className="media tm-notification-item">
                        <tbody>
                            <tr>
                                <td><ValuesList /></td>

                            </tr>
                            <tr>
                                <td></td>
                                <td></td>
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );



}

