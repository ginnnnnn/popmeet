import React from 'react';
import {
  CreateBtnsContainer,
  CreateBtn,
  BtnIconContainer,
  BtnInfoContainer,
  BtnInfoTitle,
  BtnInfoDescription,
  BtnIconWrapper,
  CreateBtnLink,
} from './create-activity-button-collection.styles';
import PetsIcon from '@material-ui/icons/Pets';
import LockIcon from '@material-ui/icons/Lock';
import { connect } from 'react-redux';
import { setActivityModalOpen } from '../../redux/ui/ui.actions';
import { setActivityPublic } from '../../redux/createActivity/createActivity.actions';

const SignIn = ({ setActivityModalOpen, setActivityPublic, publicProps }) => {
  const handleCreateActivity = (acPublic) => {
    setActivityModalOpen(false);
    setActivityPublic(acPublic);
  };

  return (
    <CreateBtnsContainer>
      <CreateBtnLink to="/create-activity">
        <CreateBtn
          acPublic={true}
          bg={publicProps ? (publicProps.open ? '#ed6337' : '') : ''}
          onClick={() => handleCreateActivity(true)}
        >
          <BtnIconContainer>
            <BtnIconWrapper acPublic>
              <PetsIcon />
            </BtnIconWrapper>
          </BtnIconContainer>
          <BtnInfoContainer>
            <BtnInfoTitle className="info">公開</BtnInfoTitle>
            <BtnInfoDescription className="info">
              所有的 Popmeet 用戶都可以看到此活動
            </BtnInfoDescription>
          </BtnInfoContainer>
        </CreateBtn>
      </CreateBtnLink>
      <CreateBtnLink to="/create-activity">
        <CreateBtn
          bg={publicProps ? (!publicProps.open ? '#53b9de' : '') : ''}
          acPublic={false}
          onClick={() => handleCreateActivity(false)}
        >
          <BtnIconContainer>
            <BtnIconWrapper acPublic={false}>
              <LockIcon />
            </BtnIconWrapper>
          </BtnIconContainer>
          <BtnInfoContainer>
            <BtnInfoTitle className="info">私人</BtnInfoTitle>
            <BtnInfoDescription className="info">
              只有擁有活動連結的人可以看到此活動
            </BtnInfoDescription>
          </BtnInfoContainer>
        </CreateBtn>
      </CreateBtnLink>
    </CreateBtnsContainer>
  );
};

export default connect(null, { setActivityModalOpen, setActivityPublic })(
  SignIn
);
