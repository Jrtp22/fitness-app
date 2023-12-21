// Profile.js
import React from 'react';
import UserProfileCard from './ProfileCard';
import '../App';
import './Navbar'

class ProfilePage extends React.Component {
  render() {
    const userData = {
      name: 'Alexender Smith',
      age: '24',
      height: '6 Foot ',
      socialLinks: [
        { icon: 'facebook', url: 'https://www.facebook.com/' },
        { icon: 'dribbble', url: 'https://dribbble.com/' },
        { icon: 'instagram', url: 'https://www.instagram.com/' },
        { icon: 'linkedin', url: 'https://www.linkedin.com/' },
        { icon: 'google', url: 'https://www.google.com/' },
      ],
    };

    return (
      <div>
        <h1>User Profile</h1>
        <UserProfileCard {...userData} />
      </div>
    );
  }
}

export default ProfilePage;
