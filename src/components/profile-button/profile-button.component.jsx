import React, { useState } from 'react';
import { ProfileButtonContainer, Name, HeadPic } from './profile-button.styles';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import ProfilePannel from '../profile-pannel/profile-pannel.component';

const ProfileButton = ({ currentUser }) => {
  const [profileOpen, setProfileOpen] = useState(false);
  const { displayName, photoURL } = currentUser;
  return (
    <ProfileButtonContainer onClick={() => setProfileOpen(!profileOpen)}>
      <Name>{displayName}</Name>
      <HeadPic src={photoURL} alt="head-pic" />
      {profileOpen ? (
        <ProfilePannel closePannel={() => setProfileOpen(false)} />
      ) : null}
    </ProfileButtonContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps)(ProfileButton);
