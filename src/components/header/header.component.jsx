import React from 'react';
import {
  HeaderContainer,
  LogoContainer,
  LogoImgContainer,
  NavigationContainer,
  Option,
  OptionLogin,
  OptionDiv,
  HeaderFixedContainer,
} from './header.styles';
import logoImgSrc from '../../assest/logo.png';
import Modal from '../modal/modal.component';
import SignIn from '../sign-in/sign-in.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {
  selectIsSiginModalOpen,
  selectIsCreateActivityModalOpen,
} from '../../redux/ui/ui.selectors';
import {
  setSignInModalOpen,
  setActivityModalOpen,
} from '../../redux/ui/ui.actions';
import { auth } from '../../firebase.utils';
import ProfileButton from '../profile-button/profile-button.component';
import CreateActivityPannel from '../create-activity-pannel/create-activity-pannel.component';

const Header = ({
  currentUser,
  isSiginModalOpen,
  setSignInModalOpen,
  isCreateActivityModalOpen,
  setActivityModalOpen,
}) => {
  return (
    <HeaderFixedContainer>
      <HeaderContainer>
        <LogoContainer to="/">
          <LogoImgContainer src={logoImgSrc} alt="logo" />
        </LogoContainer>
        <NavigationContainer>
          <OptionDiv onClick={() => setActivityModalOpen(true)}>
            創活動
          </OptionDiv>
          <Option to="/find-activity">找活動</Option>
          <Option to="/question-and-answer">常見問題</Option>
          {currentUser ? (
            <ProfileButton />
          ) : (
            <OptionLogin onClick={() => setSignInModalOpen(true)}>
              登入
            </OptionLogin>
          )}
        </NavigationContainer>
        {/* open handleClose */}
        <Modal
          open={isSiginModalOpen}
          onClose={() => setSignInModalOpen(false)}
        >
          <SignIn />
        </Modal>
        <Modal
          open={isCreateActivityModalOpen}
          onClose={() => setActivityModalOpen(false)}
        >
          <CreateActivityPannel />
        </Modal>
      </HeaderContainer>
    </HeaderFixedContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  isSiginModalOpen: selectIsSiginModalOpen,
  isCreateActivityModalOpen: selectIsCreateActivityModalOpen,
});

export default connect(mapStateToProps, {
  setSignInModalOpen,
  setActivityModalOpen,
})(Header);
