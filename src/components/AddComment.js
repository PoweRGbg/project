import { useEffect, useState } from 'react';
import { addComment } from '../services/commentsService';

export default function AddComment({meal}) {
    let [newComment, setNewComment] = useState({});

    useEffect(() => {
        // console.log(`Meal id got is ${meal._id}`);
    }, []);


    function onClickHandler(e) {
        e.preventDefault();
        // newComment.text = e.target.value;
        newComment.user = "current user"
        newComment.meal = meal._id;
        newComment.date = Date.now(); 
        if (true) {
            addComment(newComment);
            // historyHook.push('/allmeals');
        }
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setNewComment(values => ({ ...values, [name]: value }))
    }

    return (
        <div className="container tm-mt-big tm-mb-big">
            <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
                <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
                    <table className="col-12 text-center">
                        <tbody>
                            <tr>
                                <td>
                                    <form action="" method="GET">

                                        <label className="tm-block-list ">Your Comment</label>
                                        <textarea
                                            name="text"
                                            type="text"
                                            className="form-control validate tm-small"
                                            id="text"
                                            required
                                            style={{
                                                'backgroundColor': '#54657d',
                                                color: '#fff',
                                                border: 0
                                            }}
                                            onChange={handleChange}
                                        ></textarea>
                                        <button
                                            type="submit"
                                            className="btn btn-primary btn-block text-uppercase"
                                            onClick={(e) => { onClickHandler(e) }}
                                        >
                                            Add comment
                                        </button>
                                    </form></td>

                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}