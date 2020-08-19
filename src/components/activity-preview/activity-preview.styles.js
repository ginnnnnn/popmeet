import styled from 'styled-components';

export const ActivityPreviewContainer = styled.div`
  height: 25vh;
  width: 100%;
  display: flex;
  margin-bottom: 2rem;
`;
export const CoverImageContainer = styled.div`
  width: 23.8%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
`;

export const CoverImage = styled.img`
  height: 100%;
  width: 100%;
`;

export const ActivityContentContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
`;
export const ContentCategory = styled.div`
  height: 10%;
  font-size: 0.9rem;
  color: #ed6337;
  font-weight: bold;
`;
export const ContentName = styled.div`
  height: 25%;
  color: #010836;
  font-size: 1.5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const TripInfo = styled.div`
  height: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  color: #010836;
  font-size: 0.9rem;
  font-weight: bold;
`;
export const TripDateAndLocation = styled.span`
  color: #53b9de;
  margin: 0 5px;
`;
export const DescriptionContainer = styled.div`
  width: 100%;
  height: 40%;
  font-size: 0.9rem;
  max-height: 50%;
  display: flex;
  flex-wrap: wrap;
  overflow-y: hidden;
  color: #828282;
`;

export const AttentPanelContainer = styled.div`
  width: 26.2%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
export const AttendMemberAmountTitle = styled.div`
  width: 35%;
  height: 15%;
  font-size: 1rem;
  display: flex;
  justify-content: flex-end;
  font-weight: bold;
`;
export const AttendMemberAmount = styled.div`
  width: 30%;
  height: 20%;
  font-size: 2rem;
  display: flex;
  justify-content: flex-end;
`;
export const BtnCollection = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-around;
`;
export const ButtonContainer = styled.button`
  background: white;
  width: 33%;
  border-radius: 30px;
  height: 45%;
  border: ${({ color }) => (color ? `1px solid ${color}` : '')};
  color: ${({ color }) => (color ? color : '')};
  font-weight: bold;
`;
