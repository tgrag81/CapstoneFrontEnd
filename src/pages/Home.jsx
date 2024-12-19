import React, { useEffect, useState } from "react";
import { useApi } from "../context/ApiContext.jsx";
import { motion } from "framer-motion";
import axios from "axios";
import "./Home.css";


const Home = () => {
    const { api, socket } = useApi();
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] =useState([]);
    useEffect(() => {
        if (socket) {
            socket.on("postUpdated", (updatedPost) => {
                setPosts((prevPosts) =>
                    prevPosts.map((post) =>
                        post._id === updatedPost._id ? updatedPost : post
                    )
                );
            });
        }
    }, [socket])

    useEffect(() => {
       //axios.get('http://localhost:5173/api/posts', {withCredentials: true}).then(() => {
        //const fetchPosts = async () => {
          //  const res = await api.get("/posts");
            //setPosts(res.data);
        //} THIS WAS REMOVED DURING HELP QUEUE 
              //  fetchPosts();
        const fetchPosts = async () => {
            try {
          const response = await axios({
              url: "http://localhost:5001/api/posts",
                method: "GET"
            });

            const data = await response.data;

            setPosts(data);
            console.log("fetched posts:", data);
        } catch (error) {
            console.error("error fetching posts:", error);
        }
    
};

        fetchPosts();
    }, [api]);

    console.log(posts);
    
    const handleLike = async(postId) => {

        try {
            const response = await axios.post('http://localhost:5001/api/posts/${postID}/like');
            const updatedPost = response.data;

            setPosts((prevPosts) => 
            prevPosts.map((post) =>
            post._id===updatedPost._id?updatedPost:post));
        }
     catch (error) {
        console.error("error liking post:", error);
    }
    const postVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }
//Add a comment

const handleAddComment = async (postId, commentText) => {
    try {
        const response = await axios.post(`http://localhost:5001/api/posts/${postId}/comments`, {
            text: commentText,
        });
        const updatedPost = response.data;

        setPosts((prevPosts) =>
            prevPosts.map((post) =>
                post._id === updatedPost._id ? updatedPost : post
            )
        );
    } catch (error) {
        console.error("Error adding comment:", error);
    }
};




return (
    <div className="home-container">
    <header className="home-header">
        <img
            src="https://www.logologo.com/logos/flower-logo.jpg" // Logo is not populating
            alt="Logo"
            className="home-logo"
        />
        <h1>Home Feed</h1>
    </header>
    {loading ? (
<p>Loading posts...</p>
)
:(
    <div className="posts-container">
        {posts.map((post) => (
            <motion.div
                key={post._id}
                variants={postVariant}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5 }}
                className="post"
            >
                <h3>{post.content}</h3>
                {post.media && <img src={post.media} alt="" className="post-media" />}
                <button onClick={() => handleLike(post._id)}>
                    Like ({post.likes.length})
                </button>
                <ul className="comments-list">
                    {post.comments.map((comment) => (
                        <li key={comment._id}>{comment.text}</li>
                    ))}
                </ul>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        const commentText = e.target.elements.comment.value;
                        if (commentText) {
                            handleAddComment(post._id, commentText);
                            e.target.reset();
                        }
                    }}
                    className="comment-form"
                >
                    <input
                        type="text"
                        name="comment"
                        placeholder="Add a comment..."
                        className="comment-input"
                    />
                    <button type="submit" className="comment-button">
                        Post
                    </button>
                </form>
            </motion.div>
        ))}
    </div>
)}
</div>
);
};
}
export default Home;

