import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AddPost from './pages/AddPost'
import PostDetail from './pages/PostDetail'



function App() {


  const [posts, setPosts] = useState(() => {
  const savedPosts = localStorage.getItem("posts"); 
  return savedPosts ? JSON.parse(savedPosts) : []; 
});

const updatePosts = (newPosts) => {
  setPosts(newPosts); 
  localStorage.setItem("posts", JSON.stringify(newPosts)); 
};



  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home posts={posts} updatePosts={updatePosts} />} />
        <Route path="/post/:id" element={<PostDetail  posts={posts} />} />
        <Route path="/add" element={<AddPost posts={posts}  updatePosts={updatePosts} />} />
      </Routes>
    </Router>
  
  )
}

export default App
