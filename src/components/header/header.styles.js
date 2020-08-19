import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderFixedContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: fixed;
  background: white;
  top: 0;
  left: 0;
  z-index: 5;
`;
export const HeaderContainer = styled.nav`
  width: 90%;
  height: 4.5rem;
  display: flex;
  padding-top: 1.5rem;
`;

export const LogoContainer = styled(Link)`
  width: 10%;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const LogoImgContainer = styled.img`
  width: 100%;
  height: auto;
`;
export const NavigationContainer = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const Option = styled(Link)`
  font-weight: bold;
  font-size: 0.9rem;
  color: ${({ color }) => (color ? color : 'black')};
  margin-left: 2rem;
  text-decoration: none;
  display: flex;
  align-items: center;
`;
export const OptionDiv = styled.div`
  font-weight: bold;
  font-size: 0.9rem;
  color: ${({ color }) => (color ? color : 'black')};
  margin-left: 2rem;
  text-decoration: none;
  display: flex;
  align-items: center;
`;

export const OptionLogin = styled.div`
  font-weight: bold;
  font-size: 0.9rem;
  color: white;
  margin-left: 2rem;
  text-decoration: none;
  display: flex;
  align-items: center;
  background: #ed6337;
  border-radius: 1.5rem;
  padding: 0 1.3rem;
  height: 80%;
  cursor: pointer;
`;
