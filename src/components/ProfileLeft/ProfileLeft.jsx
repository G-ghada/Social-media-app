import React from 'react'
import './ProfileLeft.css'
import LogoSearch from '../LogoSearch/LogoSearch'
import InfoCard from '../../components/InfoCard/InfoCard';  // import the component here so we
import FollowersCard from '../FollowersCard/FollowersCard'
const ProfileLeft = () => {
  return (
    <div className='ProfileSide'>
          <LogoSearch />
          <InfoCard />
          <FollowersCard/>
    </div>
  )
}

export default ProfileLeft
