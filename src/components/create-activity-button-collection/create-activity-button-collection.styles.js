import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const open = '#ed6337';
const notOpen = '#53b9de';

export const Container = styled.div`
  width: 33rem;
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
export const CreateBtnsContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 40%;
`;
export const CreateBtnLink = styled(Link)`
  text-decoration: none;
`;
export const CreateBtn = styled.div`
  width: 20rem;
  background: ${({ bg }) => (bg ? bg : 'white')};
  border-radius: 8px;
  border: 1px solid black;
  border: ${({ acPublic }) =>
    acPublic ? `1px solid ${open}` : `1px solid ${notOpen}`};
  margin: 5px auto;
  padding: 1rem 0.5rem;
  font-weight: bold;
  display: flex;
  :hover {
    background: ${({ acPublic }) => (acPublic ? open : notOpen)};
    & .info {
      color: white;
    }
  }
`;
export const BtnIconContainer = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ acPublic }) => (acPublic ? open : notOpen)};
`;
export const BtnIconWrapper = styled.div`
  width: 2.2rem;
  height: 2.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ acPublic }) => (acPublic ? open : notOpen)};
  border-radius: 50%;
  background: white;
`;
export const BtnInfoContainer = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
`;
export const BtnInfoTitle = styled.div`
  font-weight: bold;
`;
export const BtnInfoDescription = styled.div`
  font-size: 0.5rem;
  color: #4f4f4f;
`;
