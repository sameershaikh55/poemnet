import React, { useState } from "react";
import "./CommentInput.css";
import { storage, db } from "../../../firebase";


function CommentInput({ comments, id, user }) {
  const [comment, setComment] = useState("");
  const [commentMap, setcommentMap] = useState(comments ? comments : []);

  const addComment = () => {
    

    commentMap.push({
      comment: comment,
      username: user.displayName,
    });

    db.collection("posts")
      .doc(id)
      .update({
        comments: commentMap,
      })
      .then(function () {
        console.log("Document successfully written!");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });

    setComment("");
  };

  return (
		<div className="commentInput">
			<input
				rows="1"
				value={comment}
				onChange={(e) => setComment(e.target.value)}
				className="commentInput__textarea"
				placeholder="Add a comment.."
			></input>

			<button
				onClick={addComment}
				className="button commentInput__button"
				style={{
					color: comment ? "rgba(253,78,51,1)" : "lightgrey",
					fontWeight: comment ? "600" : "500",
				}}
			>
				Post
			</button>
		</div>
	);
}

export default CommentInput;
