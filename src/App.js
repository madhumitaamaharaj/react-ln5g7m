import React, { useState, useEffect } from "react";
import "./style.css";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);

  const handleDelete = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Body</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td>{post.title}</td>
            <td>{post.body}</td>
            <td>
            <button onClick={() => handleDelete(post.id)}>Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Posts;
