import React from 'react';
import {
  ActivityPreviewContainer,
  CoverImageContainer,
  CoverImage,
  ActivityContentContainer,
  ContentCategory,
  ContentName,
  TripInfo,
  TripDateAndLocation,
  DescriptionContainer,
  AttentPanelContainer,
  AttendMemberAmountTitle,
  AttendMemberAmount,
  BtnCollection,
  ButtonContainer,
} from './activity-preview.styles';
import { getTimeStrByDate } from './helper';

const ActivityPreview = ({ item }) => {
  const {
    coverImage,
    type,
    name,
    startTime,
    endTime,
    departure,
    limit,
    description,
    approved,
  } = item;
  console.log(startTime);
  let typeStr;
  switch (type) {
    case 'hiking':
      typeStr = '登山';
      break;
    default:
      typeStr = '無分類';
  }
  const y = getTimeStrByDate(startTime).y;
  const m = getTimeStrByDate(startTime).m;
  const d = getTimeStrByDate(startTime).d;
  const h = getTimeStrByDate(startTime).h;
  const mm = getTimeStrByDate(startTime).mm;
  const timeStr = `${y}/${m}/${d} ${h}:${mm}`;
  const { y: ey, m: em, d: ed } = getTimeStrByDate(endTime);
  const days =
    (new Date([ey, em, ed]).getTime() - new Date([y, m, d]).getTime()) /
    (24 * 3600 * 1000);
  return (
    <ActivityPreviewContainer>
      <CoverImageContainer>
        <CoverImage src={coverImage} alt="cover" />
      </CoverImageContainer>
      <ActivityContentContainer>
        <ContentCategory>{typeStr}</ContentCategory>
        <ContentName>{name}</ContentName>
        <TripInfo>
          {days}日遊 · <TripDateAndLocation>{timeStr}</TripDateAndLocation>於
          <TripDateAndLocation>{departure}</TripDateAndLocation>
          集合 · {limit}人成團
        </TripInfo>
        <TripInfo>活動內容:</TripInfo>
        <DescriptionContainer>{description}</DescriptionContainer>
      </ActivityContentContainer>
      <AttentPanelContainer>
        <AttendMemberAmountTitle>參加人數</AttendMemberAmountTitle>
        <AttendMemberAmount>
          {approved.length}/{limit}
        </AttendMemberAmount>
        <BtnCollection>
          <ButtonContainer color="#ed6337">我要參加</ButtonContainer>
          <ButtonContainer color="#53b9de">加入追蹤</ButtonContainer>
        </BtnCollection>
      </AttentPanelContainer>
    </ActivityPreviewContainer>
  );
};

export default ActivityPreview;
