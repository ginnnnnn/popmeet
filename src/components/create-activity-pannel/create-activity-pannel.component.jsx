import React from 'react';
import ClearIcon from '@material-ui/icons/Clear';
import CreateActivityBtnCollection from '../create-activity-button-collection/create-activity-button-collection.component';
import {
  Container,
  CloseBar,
  Title,
  CloseContainer,
} from './create-activity-pannel.styles';

const CreateActivityPannel = () => {
  return (
    <Container>
      <CloseBar>
        <CloseContainer>
          <ClearIcon fontSize="inherit" />
        </CloseContainer>
      </CloseBar>
      <Title>選擇活動隱私設定</Title>
      <CreateActivityBtnCollection />
    </Container>
  );
};

export default CreateActivityPannel;
