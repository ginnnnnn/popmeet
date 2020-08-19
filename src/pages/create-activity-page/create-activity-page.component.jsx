import React, { useState } from 'react';
import {
  CreateActivityContainer,
  CreateActivityTitleBar,
  CreateActivityTitle,
  SwitchPublicButton,
  BtnIconWrapper,
  BtnInfoContainer,
  BtnIconContainer,
  SwitchPannelContainer,
  BarFrontContainer,
  BarBackContainer,
  CustomButton,
  CreateActivityTitleBarFixedContainer,
} from './create-activity-page.styles';
import PetsIcon from '@material-ui/icons/Pets';
import LockIcon from '@material-ui/icons/Lock';
import { connect } from 'react-redux';
import { selectCreateActivityIsPublic } from '../../redux/createActivity/createActivity.selectors';
import { createStructuredSelector } from 'reselect';
import CreateActivityBtnCollection from '../../components/create-activity-button-collection/create-activity-button-collection.component';
import CreateActivityForm from '../../components/create-activity-form/create-activity-form.component';

const CreateActivityPage = ({ isActivityIPublic }) => {
  const [isSwitchPannelOpen, setSwitchOpen] = useState(false);
  return (
    <CreateActivityContainer>
      <CreateActivityTitleBarFixedContainer>
        <CreateActivityTitleBar>
          <BarFrontContainer>
            <CreateActivityTitle>創建活動</CreateActivityTitle>
            <SwitchPublicButton
              onClick={() => setSwitchOpen(!isSwitchPannelOpen)}
              ispublic={isActivityIPublic}
            >
              <BtnIconContainer ispublic={isActivityIPublic}>
                <BtnIconWrapper ispublic={isActivityIPublic}>
                  {isActivityIPublic ? <PetsIcon /> : <LockIcon />}
                </BtnIconWrapper>
              </BtnIconContainer>
              <BtnInfoContainer className="title">
                {isActivityIPublic ? '公開' : '私人'} ❯
              </BtnInfoContainer>
              {isSwitchPannelOpen ? (
                <SwitchPannelContainer>
                  <CreateActivityBtnCollection
                    publicProps={{ open: isActivityIPublic }}
                  />
                </SwitchPannelContainer>
              ) : null}
            </SwitchPublicButton>
          </BarFrontContainer>
          <BarBackContainer>
            <CustomButton>取消建立</CustomButton>
            <CustomButton disabled>建立</CustomButton>
          </BarBackContainer>
        </CreateActivityTitleBar>
      </CreateActivityTitleBarFixedContainer>
      <CreateActivityForm />
    </CreateActivityContainer>
  );
};

const mapStateToProp = createStructuredSelector({
  isActivityIPublic: selectCreateActivityIsPublic,
});

export default connect(mapStateToProp)(CreateActivityPage);
