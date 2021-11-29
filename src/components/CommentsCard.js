import AuthContext from "../contexts/AuthContext";
import { useState, useEffect, useContext } from "react";
import { getComments } from "../services/commentsService.js";
import CommentsTableRow from "./CommentTableRow.js";
import { addComment } from "../services/commentsService.js";
import { useHistory } from "react-router-dom";


export default function CommentsCard({ meal }) {
  let [comments, setComments] = useState([]);
  const {user} = useContext(AuthContext)
  let newComment = {};
  let historyHook = useHistory();


  useEffect(() => {
    getComments(meal._id).then((result) => {
      if (result) setComments(result);
    });
  }, [meal]);

  function onClickHandler(e) {
    e.preventDefault();
    let formData = new FormData(e.target);
    newComment.text = formData.get("text");
    newComment.user = user.email;
    newComment.recipe = meal._id;
    newComment.recipeName = meal.name;
    newComment.date = Date.now();
    if (user.email) {
      addComment(newComment, user);
      getComments(meal._id).then((result) => {
        if (result) setComments(result);
      });
      historyHook.push(`/meals/${meal._id}`);
    }
  }

  return (
    <div className="container tm-mt-big tm-mb-big">
      {user.email ? (
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
      ) : (
        ""
      )}

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
