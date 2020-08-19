import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const OverviewContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const OverviewTitleContainer = styled.div`
  margin: 2rem 0;
  display: flex;
`;

export const OverviewTitle = styled.span`
  width: 50%;
  color: #010836;
  font-size: 1.5rem;
  display: flex;
  justify-content: flex-start;
`;
export const OverviewLinkMore = styled(Link)`
  width: 50%;
  color: #53b9de;
  font-size: 1.2rem;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  text-decoration: none;
`;

export const CategoryContainer = styled.div`
  width: 100%;
  display: flex;
  height: 40vh;
  justify-content: space-between;
`;

export const CardContainer = styled.div`
  width: 23.8%;
  height: 100%;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 8px 2px rgba(0, 0, 0, 0.2);
  overflow: hidden;
`;

export const CardImage = styled.img`
  height: 60%;
`;
export const CardTitle = styled.span`
  color: #010836;
  font-size: 1.5rem;
  margin: 1rem;
`;
export const CardDescription = styled.span`
  color: #010836;
  margin: 0 1rem;
`;
