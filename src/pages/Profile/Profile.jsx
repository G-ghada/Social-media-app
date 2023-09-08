import React from 'react'
import './Profile.css'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import PosteSide from '../../components/PosteSide/PosteSide';
import ProfileCard from '../../components/profileCard/ProfileCard'
import RightSide from '../../components/RightSide/RightSide'

const Profile = () => {
    return (  <div className="Profile">
      <ProfileLeft />
      <div className="Profile-center">
        <ProfileCard />
        <PosteSide/>
      </div>
      <RightSide/>
  </div> 
  )
}

export default Profile
