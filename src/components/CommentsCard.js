import { useState, useEffect } from "react";
import { getComments } from "../services/commentsService.js"
import CommentsTableRow from "./CommentTableRow.js";

export default function CommentsCard(props) {
    let [comments, setComments] = useState([]);


    useEffect(() => {
        getComments(props.meal).then(result => {
            if (result)
                setComments(result)
        })
    }, [props.meal]);

    return (
        <div className="container tm-mt-big tm-mb-big">
            <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
                <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
                <label className="tm-block-list ">Comments about this meal</label>
                    <table className="col-12 text-center">
                        <tbody>
                                {comments.length > 0 && comments.map(comment => <CommentsTableRow comment={comment} key={comment._id} />)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}