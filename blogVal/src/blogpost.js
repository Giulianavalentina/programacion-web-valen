import React from "react";
import { useParams } from "react-router-dom";

const posts = [
  { id: 1, title: "Publicación 1", content: "Contenido de la publicación 1." },
  { id: 2, title: "Publicación 2", content: "Contenido de la publicación 2." },
  { id: 3, title: "Publicación 3", content: "Contenido de la publicación 3." },
];

const BlogPost = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <h2>Publicación no encontrada</h2>;
  }

  return (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPost;
