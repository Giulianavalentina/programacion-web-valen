import React from "react";
import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "Publicación 1", content: "Contenido de la publicación 1." },
  { id: 2, title: "Publicación 2", content: "Contenido de la publicación 2." },
  { id: 3, title: "Publicación 3", content: "Contenido de la publicación 3." },
];

const BlogList = () => {
  return (
    <div>
      <h2>Lista de Publicaciones</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
