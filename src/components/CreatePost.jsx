import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
  
  const [content, setContent] = useState('');
  const [media, setMedia] = useState('');
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/api/posts/create', {
        userId: '63efc5f8a2e45b2f7c345678', // Replace with dynamic user if available
        content,
        media,
      });
      console.log('Post created:', response.data);
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="What's on your mind?"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Media URL"
        value={media}
        onChange={(e) => setMedia(e.target.value)}
      />
      <button type="submit">Create Post</button>
    </form>
    </div>
  );
};

export default CreatePost;
