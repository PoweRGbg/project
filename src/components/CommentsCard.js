import { useState, useEffect } from "react";
import { getComments } from "../services/commentsService.js";
import CommentsTableRow from "./CommentTableRow.js";
import { addComment } from "../services/commentsService.js"

export default function CommentsCard({meal}) {
  let [comments, setComments] = useState([]);
  let newComment = {};

  useEffect(() => {
    getComments(meal._id).then((result) => {
      if (result) setComments(result);
    });
  }, [meal]);

  function onClickHandler(e) {
    e.preventDefault();
    let formData = new FormData(e.target)
    newComment.text = formData.get('text');
    newComment.user = sessionStorage.getItem('email');
    newComment.meal = meal._id;
    newComment.date = Date.now(); 
    if (sessionStorage.getItem('email')) {
        addComment(newComment);
        // historyHook.push(`/meal/${meal._id}`);
        getComments(meal._id).then((result) => {
            if (result) setComments(result);
          });
    }
}

  return (
    <div className="container tm-mt-big tm-mb-big">
      <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
        <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
          <table className="col-12 text-center">
            <tbody>
              <tr>
                <td>
                  <form action="" method="GET" onSubmit={onClickHandler}>
                    <label className="tm-block-list ">Your Comment</label>
                    <textarea
                      name="text"
                      type="text"
                      className="form-control validate tm-small"
                      id="text"
                      required
                      style={{
                        backgroundColor: "#54657d",
                        color: "#fff",
                        border: 0,
                      }}
                    ></textarea>
                    <button
                      type="submit"
                      className="btn btn-primary btn-block text-uppercase"
                    >
                      Add comment
                    </button>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="container tm-mt-big tm-mb-big">
        <div className="col-xl-9 col-lg-10 col-md-12 col-sm-12 mx-auto">
          <div className="tm-bg-primary-dark tm-block tm-block-h-auto">
            <label className="tm-block-list ">Comments about {meal.name}</label>
            <table className="col-12 text-center">
              <tbody>
                {comments.length > 0 &&
                  comments.map((comment) => (
                    <CommentsTableRow comment={comment} key={comment._id} />
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
