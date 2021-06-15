import React, { useState, useEffect } from "react";
import Post from "./Post";
import { db } from "../../../firebase";
import "./Feed.css";
import { usePostContext } from "../../../contexts/postContext";
import CreatePost from "./CreatePost";
import Poem from "./Poemapi";

function Feed({ user }) {
  // const [posts, setPosts] = useState([]);
  const { filteredPosts, setPost } = usePostContext();

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPost(snapshot.docs.map((doc) => ({ id: doc.id, post: doc.data() })));
    });
  }, [setPost]);
  return (
		<div className="chat-forum">
			<h1 className="chat">
				Chat <span className="heading">Forum</span>
			</h1>
			<div className="poem-api mt-3">
				<Poem />
				<div className="feed">
					<div className="feed__posts">
						{filteredPosts?.map(({ id, post }) => (
							<Post
								key={id}
								id={id}
								userProfileUrl={post.userProfileUrl}
								userName={post.userName}
								postImageUrl={post.postImageUrl}
								caption={post.caption}
								comments={post.comments}
								user={user}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Feed;
