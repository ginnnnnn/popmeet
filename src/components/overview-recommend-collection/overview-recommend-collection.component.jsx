import React from 'react';
import {
  RecommendContentContainer,
  RecommendTitleContainer,
  RecommendTitle,
} from './overview-recommend-collection.styles';
import ActivityPreview from '../activity-preview/activity-preview.component';
const ACS = [
  {
    coverImage:
      'https://images.unsplash.com/photo-1501555088652-021faa106b9b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1653&q=80',
    startTime: new Date([2020, 8, 16]),
    endTime: new Date([2020, 8, 17]),
    activityId: '6SCeozMOxHy9Xhtowz5P',
    location: '台中火車站',
    departure: '合歡山主峰步道',
    category: 'outdoor',
    type: 'hiking',
    fee: 3600,
    limit: 5,
    description:
      '我們會在登山口集合,我們會在登山口集合,我們會在登山口集合,我們會在登山口集合,我們會在登山口集合,我們會在登山口集合我們會在登山口集合我們會在登山口集合我們會在登山口集合,我們會在登山口集合...',
    name: '合歡山西北峰兩天一夜 滿一車出發',
    imgUrls: [
      { name: '集合地', url: 'xxxxxx' },
      { name: '目的地', url: 'xxxxxx' },
    ],
    questions: [
      { title: '有爬山經驗嗎', require: true },
      { title: '介意不洗澡嗎', require: true },
      { title: '可以餓肚子嗎', require: false },
    ],
    isPrivate: false,
    approved: ['XXX', 'XXX', 'XXX'],
  },
];

const OverviewRecommedCollection = () => {
  return (
    <RecommendContentContainer>
      <RecommendTitleContainer>
        <RecommendTitle>為你推薦</RecommendTitle>
      </RecommendTitleContainer>
      {ACS.map((item) => (
        <ActivityPreview key={item.activityId} item={item} />
      ))}
    </RecommendContentContainer>
  );
};

export default OverviewRecommedCollection;
