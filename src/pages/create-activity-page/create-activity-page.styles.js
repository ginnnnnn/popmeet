import styled from 'styled-components';

const open = '#ed6337';
const notOpen = '#53b9de';

export const CreateActivityContainer = styled.div`
  width: 100%;
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  margin: 9rem 0 2.5rem;
`;
export const CreateActivityTitleBarFixedContainer = styled.div`
  width: 100%;
  height: 6rem;
  position: fixed;
  top: 4.5rem;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  z-index: 5;
  background: white;
`;
export const CreateActivityTitleBar = styled.div`
  width: 90%;
  height: 3.5rem;
  display: flex;
  align-items: center;
`;
export const BarFrontContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
`;
export const BarBackContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const CreateActivityTitle = styled.div`
  height: 100%;
  font-size: 2.4rem;
  color: #4f4f4f;
  font-weight: bold;
`;

export const SwitchPublicButton = styled.div`
  width: 7rem;
  background: white;
  border-radius: 35px;
  border: 1px solid black;
  border: ${({ ispublic }) =>
    ispublic ? `1px solid ${open}` : `1px solid ${notOpen}`};
  font-weight: bold;
  display: flex;
  padding: 5px 10px;
  margin: 0 0.5rem 0 1.5rem;
  text-decoration: none;
  background: ${({ ispublic }) => (ispublic ? open : notOpen)};
  & .title {
    color: white;
  }
  cursor: pointer;
  position: relative;
`;

export const BtnIconContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ ispublic }) => (ispublic ? open : notOpen)};
`;
export const BtnIconWrapper = styled.div`
  width: 1.8rem;
  height: 1.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${({ ispublic }) => (ispublic ? open : notOpen)};
  border-radius: 50%;
  background: white;
`;
export const BtnInfoContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SwitchPannelContainer = styled.div`
  width: 23rem;
  padding: 1rem 0;
  border-radius: 15px;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  position: absolute;
  top: 3.5rem;
  left: 0;
  background: white;
  z-index: 3;
`;

export const CustomButton = styled.div`
  width: 6.5rem;
  height: 2.5rem;
  margin-left: 2rem;
  border-radius: 35px;
  border: ${({ disabled }) =>
    disabled ? '1px solid lightgrey' : `1px solid ${open}`};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 0.9rem;
  color: ${({ disabled }) => (disabled ? 'lightgrey' : `${open}`)};
  :hover {
    border: ${({ disabled }) =>
      disabled ? '1px solid lightgrey' : `2px solid ${open}`};
  }
`;
