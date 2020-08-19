import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ProfilePannelContainer = styled.div`
  width: 16rem;
  border-radius: 15px;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 3.5rem;
  right: 0;
  background: white;
  z-index: 3;
`;

export const Option = styled(Link)`
  font-size: 0.9rem;
  color: ${({ signOut }) => (signOut ? 'red' : 'darkblue')};
  margin: 1.2rem;
  cursor: pointer;
  text-decoration: none;
`;
export const SignOut = styled.div`
  font-size: 0.9rem;
  color: red;
  margin: 1.2rem;
  cursor: pointer;
`;
