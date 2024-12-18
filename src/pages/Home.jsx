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
      //  axios.get('http://localhost:5173/api/posts', {withCredentials: true}).then(() => {
        //const fetchPosts = async () => {
          //  const res = await api.get("/posts");
            //setPosts(res.data);
        //} THIS WAS REMOVED DURING HELP QUEUE 
                //fetchPosts();
        const fetchPosts = async () => {
            const response = await axios({
                url: "http://localhost:5001/api/posts",
                method: "GET"
            });

            const data = await response.data;

            setPosts(data);
        }

        fetchPosts();
    }, [api])

    console.log(posts);
    
    const postVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
    }


return (
        <div>
          <h1>Post Feed</h1>
            {posts?.map((post) => {
              return (  <motion.div
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
                </motion.div>)
            })} 
        </div>
     )   
}

export default Home;

