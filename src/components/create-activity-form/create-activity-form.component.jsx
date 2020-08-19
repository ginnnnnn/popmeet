import React, { useEffect, useState } from 'react';
import {
  CreateActivityFormContainer,
  ActivityTitle,
  ActivityChooseContainer,
  ActivityChooseButton,
  ActivityQuestion,
  ActivityInput,
  ActivityDescription,
  ActivityJoinAmountContainer,
  ActivityJoinAmountInput,
  ActivityJoinAmountIconContainer,
  ActivityAnswer,
  ActivityPicture,
  ActivityPictureTitle,
  ActivityChoosePannel,
  ActivityChooseColumn,
  ActivityChooseColumnTitle,
  ActivityType,
} from './create-activity-form.styles';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import AddPhotoAlternateIcon from '@material-ui/icons/AddPhotoAlternate';
import { firestore } from '../../firebase.utils';

const CreateActivityForm = () => {
  const [category, setCategory] = useState([]);
  const [selectType, setSelectType] = useState('');
  const [selectTypeOpen, setSelectTypeOpen] = useState(false);

  useEffect(() => {
    const collectionRef = firestore.collection('activity-types');
    collectionRef.get().then((res) =>
      setCategory(
        res.docs.map((doc) => {
          console.log(doc);
          return { id: doc.id, ...doc.data() };
        })
      )
    );
  }, []);
  const handleSetSelectType = (obj) => {
    setSelectTypeOpen(false);
    setSelectType(obj);
  };
  return (
    <CreateActivityFormContainer>
      <ActivityTitle>活動類型</ActivityTitle>
      <ActivityChooseContainer>
        {selectType ? (
          <div onClick={() => setSelectTypeOpen(!selectTypeOpen)}>
            <span
              style={{
                fontSize: '1.2rem',
                fontWeight: 'bold',
                color: '#ed6337',
              }}
            >
              {selectType.title}
            </span>{' '}
            更改 ❯
          </div>
        ) : (
          <ActivityChooseButton
            onClick={() => setSelectTypeOpen(!selectTypeOpen)}
          >
            選擇活動類型 ❯
          </ActivityChooseButton>
        )}
        {selectTypeOpen ? (
          <ActivityChoosePannel>
            {category.length
              ? category.map(({ id, types }) => {
                  let titleStr;
                  if (id === 'water') {
                    titleStr = '水上類';
                  }
                  if (id === 'outdoor') {
                    titleStr = '野外類';
                  }
                  if (id === 'ball') {
                    titleStr = '球類';
                  }
                  const keysTypes = Object.keys(types);
                  return (
                    <ActivityChooseColumn key={id}>
                      <ActivityChooseColumnTitle>
                        {titleStr}
                      </ActivityChooseColumnTitle>
                      {keysTypes.map((key) => (
                        <ActivityType
                          onClick={() =>
                            handleSetSelectType({ key, title: types[key] })
                          }
                          key={key}
                        >
                          {types[key]}
                        </ActivityType>
                      ))}
                    </ActivityChooseColumn>
                  );
                })
              : null}
          </ActivityChoosePannel>
        ) : null}
      </ActivityChooseContainer>
      <ActivityTitle placeholder="活動名稱">活動名稱</ActivityTitle>
      <ActivityInput placeholder="活動名稱" />
      <ActivityTitle>活動時間</ActivityTitle>
      <ActivityTitle>活動簡介</ActivityTitle>
      <ActivityDescription placeholder="寫一些關於這個活動的簡介吧" />
      <ActivityTitle>活動人數</ActivityTitle>
      <ActivityJoinAmountContainer>
        <ActivityJoinAmountIconContainer>
          <EmojiPeopleIcon />
        </ActivityJoinAmountIconContainer>
        <ActivityJoinAmountInput placeholder="活動人數" />
      </ActivityJoinAmountContainer>
      <ActivityTitle>出發地點</ActivityTitle>
      <ActivityInput placeholder="出發地點" />
      <ActivityTitle>目的地</ActivityTitle>
      <ActivityInput placeholder="目的地" />
      <ActivityTitle>預估費用</ActivityTitle>
      <ActivityInput placeholder="預估費用" />
      <ActivityTitle>活動照片</ActivityTitle>
      <ActivityPicture>
        <AddPhotoAlternateIcon fontSize="inherit" />
        <ActivityPictureTitle>上傳照片</ActivityPictureTitle>
      </ActivityPicture>
      <ActivityTitle>想問參加者的問題 (非必須, 最多三個)</ActivityTitle>
      <ActivityQuestion>問題一</ActivityQuestion>
      <ActivityAnswer placeholder="問題內容" />
      <ActivityQuestion>問題二</ActivityQuestion>
      <ActivityAnswer placeholder="問題內容" />
      <ActivityQuestion>問題三</ActivityQuestion>
      <ActivityAnswer placeholder="問題內容" />
    </CreateActivityFormContainer>
  );
};

export default CreateActivityForm;
