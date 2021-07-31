import React from 'react';
import s from './Profile.module.css';
import MyPosts from './My Posts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './My Posts/MyPostsContainer';



const Profile = (props) => {
  return <div>
    <ProfileInfo />
    <MyPostsContainer />      
  </div>
}

export default Profile;



