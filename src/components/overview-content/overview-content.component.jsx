import React from 'react';
import {
  OverviewContentContainer,
  OverviewTitleContainer,
  CategoryContainer,
  CardContainer,
  CardImage,
  CardTitle,
  CardDescription,
  OverviewTitle,
  OverviewLinkMore,
} from './overview-content.styles';

const COLLECTION_PIC = [
  {
    id: 1,
    title: '登山健行',
    description: '靠雙腿享受山林的清新、原野的開闊於野溪的清涼。',
    imageUrl:
      'https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80',
  },
  {
    id: 2,
    title: '潛水',
    description: '靠雙腿享受山林的清新、原野的開闊於野溪的清涼。',
    imageUrl:
      'https://images.unsplash.com/photo-1570367364062-4ab01ebf0954?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80',
  },
  {
    id: 3,
    title: '衝浪',
    description: '靠雙腿享受山林的清新、原野的開闊於野溪的清涼。',
    imageUrl:
      'https://images.unsplash.com/photo-1502680390469-be75c86b636f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 4,
    title: '攀岩',
    description: '靠雙腿享受山林的清新、原野的開闊於野溪的清涼。',
    imageUrl:
      'https://images.unsplash.com/photo-1564769662533-4f00a87b4056?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2014&q=80',
  },
];

const OverviewContent = () => {
  return (
    <OverviewContentContainer>
      <OverviewTitleContainer>
        <OverviewTitle>探索活動類型</OverviewTitle>
        <OverviewLinkMore to="/">更多類型{'>>'}</OverviewLinkMore>
      </OverviewTitleContainer>
      <CategoryContainer>
        {COLLECTION_PIC.map(({ id, title, description, imageUrl }) => {
          return (
            <CardContainer key={title + id}>
              <CardImage src={imageUrl} alt={title} />
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardContainer>
          );
        })}
      </CategoryContainer>
    </OverviewContentContainer>
  );
};

export default OverviewContent;
