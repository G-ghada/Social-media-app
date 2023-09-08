import React from "react";
import "./Home.css";
import ProfileSide from "../../components/profileside/ProfileSide";
import PosteSide from "../../components/PosteSide/PosteSide";
import RightSide from "../../components/RightSide/RightSide";
const Home = () => {
  return (
    <div className="Home">
      <ProfileSide />
      <PosteSide />
      <RightSide />
    </div>
  );
};

export default Home;
