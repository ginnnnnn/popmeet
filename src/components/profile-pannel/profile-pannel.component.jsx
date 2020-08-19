import React from 'react';
import { ProfilePannelContainer, Option } from './profile-pannel.styles';
import { auth } from '../../firebase.utils';

const ProfilePannel = ({ closePannel }) => {
  return (
    <ProfilePannelContainer>
      <Option to="/my-activities" onClick={closePannel}>
        我的活動
      </Option>
      <Option to="/following-activities" onClick={closePannel}>
        追蹤中活動
      </Option>
      <Option to="/my-profile" onClick={closePannel}>
        我的帳戶
      </Option>
      <Option signOut onClick={() => auth.signOut()}>
        登出
      </Option>
    </ProfilePannelContainer>
  );
};

export default ProfilePannel;
