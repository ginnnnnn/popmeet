import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import { signInwithFacebook, signInwithGoogle } from '../../firebase.utils';
import {
  SignInContainer,
  CloseBar,
  Title,
  SignInBtnsContainer,
  CloseContainer,
  SignUpContainer,
  SignInBtn,
} from './Sign-in.styles';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <SignInContainer>
      <CloseBar>
        <CloseContainer>
          <ClearIcon fontSize="inherit" />
        </CloseContainer>
      </CloseBar>
      <Title>登入 Popmeet</Title>
      <SignInBtnsContainer>
        <SignInBtn fb onClick={() => signInwithFacebook()}>
          使用facebook 帳號登入
        </SignInBtn>
        <SignInBtn google onClick={() => signInwithGoogle()}>
          使用google 帳號登入
        </SignInBtn>
      </SignInBtnsContainer>
      <SignUpContainer>
        還沒註冊嗎?<Link to="/sign-up">註冊</Link>
      </SignUpContainer>
    </SignInContainer>
  );
};

export default SignIn;
