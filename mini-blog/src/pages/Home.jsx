import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MdDeleteOutline } from "react-icons/md";


function Home({posts,updatePosts}) {

  const navigate=useNavigate();



  return (
    <div className='home-container'>
      <h1>🏠 Ana Sayfa</h1>

      <button className='add-post-btn' onClick={()=>navigate("/add")} >➕ Yeni yazı ekle</button>

      <ul className='post-list'>
      {posts.map((post)=>(
      <li key={post.id} className='post-item'> {post.title} 

      <button className='detail-btn'
      onClick={()=> navigate(`/post/${post.id}`)}
      >
        Detay
      </button>


      <button
  className='delete-btn'
  onClick={() => updatePosts(posts.filter(p => p.id !== post.id))}
>
  <MdDeleteOutline />
  🗑 Sil
</button>


      
     </li>
   ) )}

  </ul>

</div>
  )
}

export default Home