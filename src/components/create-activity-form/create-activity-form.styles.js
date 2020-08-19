import styled from 'styled-components';

const veryLightGrey = '#f3f3f3';
export const CreateActivityFormContainer = styled.div`
  width: 100%;
  min-height: 40vh;
  display: flex;
  flex-direction: column;
`;

export const CreateActivityTypeContainer = styled.div`
  width: 100%;
  height: 20vh;
  display: flex;
  flex-direction: column;
`;

export const ActivityTitle = styled.div`
  font-size: 1.5rem;
  color: #7e7979;
`;
export const ActivityType = styled.div`
  width: 80%;
  font-size: 0.9rem;
  color: #ed6337;
  padding: 0.8rem 1rem;
  font-weight: bold;
  :hover {
    color: white;
    background: #ed6337;
  }
`;

export const ActivityChooseContainer = styled.div`
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  position: relative;
`;
export const ActivityChoosePannel = styled.div`
  width: 40%;
  height: 18rem;
  border-radius: 15px;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: flex;
  position: absolute;
  top: 4.3rem;
  left: 0;
  background: white;
  z-index: 3;
  padding: 1rem;
`;
export const ActivityChooseColumn = styled.div`
  height: 100%;
  width: 33%;
  display: flex;
  flex-direction: column;
`;
export const ActivityChooseColumnTitle = styled.div`
  color: #4f4f4f;
  font-weight: bold;
  font-size: 1rem;
`;

export const ActivityChooseButton = styled.div`
  width: 8.3rem;
  height: 2.6rem;
  background: #53b9de;
  border-radius: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  font-size: 0.9rem;
`;
export const ActivityQuestion = styled.div`
  font-size: 1.2rem;
  color: #4f4f4f;
`;
export const ActivityAnswer = styled.input`
  width: 30%;
  border-radius: 35px;
  background: ${veryLightGrey};
  font-size: 1.2rem;
  padding: 0.7rem 1rem;
  border: none;
  outline: 0;
  margin: 1rem 0;
`;
export const ActivityInput = styled.input`
  width: 50%;
  border-radius: 35px;
  background: ${veryLightGrey};
  font-size: 1.2rem;
  padding: 0.7rem 1rem;
  border: none;
  outline: 0;
  margin: 1rem 0;
`;
export const ActivityPicture = styled.div`
  width: 15rem;
  height: 12rem;
  border-radius: 35px;
  background: ${veryLightGrey};
  font-size: 8rem;
  padding: 0.7rem 1rem;
  border: none;
  outline: 0;
  color: #7e7979;
  margin: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const ActivityPictureTitle = styled.span`
  display: flex;
  justify-content: center;
  color: #7e7979;
  font-size: 0.9rem;
`;
export const ActivityDescription = styled.textarea`
  width: 50%;
  height: 30rem;
  border-radius: 35px;
  background: ${veryLightGrey};
  font-size: 1.2rem;
  padding: 0.7rem 1rem;
  border: none;
  outline: 0;
  margin: 1rem 0;
`;
export const ActivityJoinAmountContainer = styled.div`
  display: flex;
  margin: 1rem 0;
  position: relative;
`;
export const ActivityJoinAmountInput = styled.input`
  width: 9rem;
  height: 2.6rem;
  background: ${veryLightGrey};
  border-radius: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.9rem;
  color: #7e7979;
  padding: 0.7rem 1rem;
  border: none;
  outline: 0;
  padding-left: 3rem;
`;
export const ActivityJoinAmountIconContainer = styled.div`
  height: 2.6rem;
  display: flex;
  align-items: center;
  color: #7e7979;
  position: absolute;
  left: 1rem;
`;
