import styled, { css } from 'styled-components';

const facebookBtn = css`
  background: white;
  color: #4267b2;
  border: 1px solid #4267b2;
  &:hover {
    background: #4267b2;
    color: white;
  }
`;
const googleBtn = css`
  background: white;
  color: #4285f4;
  border: 1px solid #4285f4;
  &:hover {
    background: #4285f4;
    color: white;
  }
`;

export const SignInContainer = styled.div`
  width: 35rem;
  height: 20rem;
  background: white;
  display: flex;
  flex-direction: column;
  padding: 10px 1rem;
`;
export const CloseBar = styled.div`
  display: flex;
  height: 10%;
`;
export const CloseContainer = styled.div`
  align-items: center;
  font-size: 2rem;
`;
export const Title = styled.h2`
  display: flex;
  height: 15%;
  justify-content: center;
  font-size: 1.6rem;
  font-weight: 400;
`;
export const SignInBtnsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40%;
`;
export const SignInBtn = styled.div`
  width: 80%;
  background: white;
  border-radius: 25px;
  margin: 5px 0;
  text-align: center;
  padding: 10px 0;
  font-weight: bold;

  ${({ fb, google }) => (fb ? facebookBtn : google ? googleBtn : '')}
`;
export const SignUpContainer = styled.div`
  display: flex;
  height: 10%;
  width: 100%;
  margin-top: 1rem;
  justify-content: center;
  font-size: 0.85rem;
`;
