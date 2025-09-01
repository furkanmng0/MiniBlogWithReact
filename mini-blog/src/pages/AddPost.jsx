import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";

function AddPost({ posts, updatePosts }) {   
  const [title, setTitle] = useState(""); 
  const [content, setContent] = useState(""); 
  const {id} =useParams();
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (title.trim() === "") return; 


      updatePosts([...posts, { id: Date.now(), title, content }]);


    navigate("/");
  };



  return (
    <div className="add-post-container">
      <h1>➕ Yeni Yazı Ekle</h1>

      <form className="add-post-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Yazı Başlığı"
          className="post-input"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Yazı İçeriği"
          className="post-textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button type="submit" className="submit-btn">
          Ekle
        </button>
      </form>
    </div>
  );
}


export default AddPost;
