/* eslint-disable no-undef */
import React, { useEffect, useState } from "react";
import { useApi } from "../context/ApiContext.jsx";
import { motion } from "framer-motion";
import axios from "axios";


const Home = () => {
    const { api, socket } = useApi();
    const [posts, setPosts] = useState([]);

    React.useEffect(() => {
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
        axios.get('http://localhost:5000/api/posts', {withCredentials: true}).then(() => {
        const fetchPosts = async () => {
            const res = await api.get("/posts");
            setPosts(res.data);
        }
        fetchPosts();
    }, [api])},

    
    )
    postVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }

,
     (
        <div>
          <h1>Post Feed</h1>
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
                    {post.media && <img src={post.media} alt="" style={{ maxWidth: "100%" }} />}
                    <button>Like ({post.likes.length})</button>
                    <ul>
                        {post.comments.map((comment) => (
                            <li key={comment._id}>{comment.text}</li>
                        ))}
                    </ul>
                </motion.div>
            ))} 
        </div>
     )   
}

export default Home;

