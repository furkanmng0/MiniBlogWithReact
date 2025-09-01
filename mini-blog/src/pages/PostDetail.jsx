import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function PostDetail({posts}) {

  const {id}=useParams();
  const navigate=useNavigate();

  const post=posts.find((p)=>p.id===Number(id));

  if (!post) {
    return (
      <div className="post-detail-container">
        <h1>Yazı bulunamadı 😢</h1>
        <button onClick={() => navigate(-1)}>🔙 Geri Dön</button>
      </div>
    );
  }


  return (
    <div className="post-detail-container">
      <h1>📄 Yazı Detayı</h1>
      <h2>{post.title}</h2>
      <p>{post.content || "Henüz içerik eklenmemiş."}</p>

      <button onClick={() => navigate(-1)}>🔙 Geri Dön</button>
    </div>
  );
}

export default PostDetail