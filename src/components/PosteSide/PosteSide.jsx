import React from "react";
import "./PosteSide.css";
import PosteShare from "../PosteShare/PosteShare";
import Postes from "../Postes/Postes";

const PosteSide = () => {
  return (
    <div className="PostSide">
      <PosteShare />
      <Postes />
    </div>
  );
};

export default PosteSide;
