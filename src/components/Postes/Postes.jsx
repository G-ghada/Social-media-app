import React from "react";
import "./Postes.css";
import { PostsData } from "../../Data/PostesData";
import Post from "../Post/Post";

const Postes = () => {
  return (
    <div className="Posts">
      {PostsData.map((post, id) => {
        return <Post Post data={post} id={id} />;
      })}
    </div>
  );
};

export default Postes;
