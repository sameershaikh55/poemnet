import React from "react";
import "./Comment.css";

function Comment({ username, comment }) {
  return (
		<div className="comment">
			<p className="mb-0">
				<strong className="mr-2 h6 font-weight-bold">{username} :</strong>
				{comment}
			</p>
		</div>
	);
}

export default Comment;
