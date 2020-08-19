import React, { useEffect } from 'react';
import './App.styles.scss';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase.utils';

import OverviewPage from './pages/overview-page/overview-page.component';
import FindActivityPage from './pages/find-activity-page/find-activity-page.component';
import CreateActivityPage from './pages/create-activity-page/create-activity-page.component';
import { Route, Switch } from 'react-router-dom';
//redux
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';
import { setSignInModalOpen } from './redux/ui/ui.actions';
import Footer from './components/footer/footer.component';

function App({ currentUser, setCurrentUser, setSignInModalOpen }) {
  // useEffect(() => {
  //   if (currentUser) {
  //     createActivityWithUserID(currentUser.id, {
  //       startTime: new Date([2020, 8, 16]),
  //       endTime: new Date([2020, 8, 17]),
  //       creator: currentUser.id,
  //       location: 'tainan',
  //       departure: 'taipei',
  //       category: 'outdoor',
  //       type: 'camping',
  //       fee: 3600,
  //       limit: 10,
  //       description: '來爬合歡山',
  //       name: '衝山拉',
  //       imgUrls: [
  //         { name: '集合地', url: 'xxxxxx' },
  //         { name: '目的地', url: 'xxxxxx' },
  //       ],
  //       questions: [
  //         { title: '有爬山經驗嗎', require: true },
  //         { title: '介意不洗澡嗎', require: true },
  //         { title: '可以餓肚子嗎', require: false },
  //       ],
  //       isPrivate: false,
  //     });
  //   }
  // }, [currentUser]);
  useEffect(() => {
    if (currentUser) {
      setSignInModalOpen(false);
    }
  }, [currentUser, setSignInModalOpen]);
  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapshop) => {
          setCurrentUser({
            id: snapshop.id,
            ...snapshop.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
    return () => {
      unsubscribeFromAuth();
    };
  }, [setCurrentUser, setSignInModalOpen]);

  return (
    <div className="app-container">
      <div className="app-inner-container">
        <Header />
        <div className="app-fixed-container">
          <Switch>
            <Route exact path="/overview" component={OverviewPage} />
            <Route path="/find-activity" component={FindActivityPage} />
            <Route
              exact
              path="/create-activity"
              component={CreateActivityPage}
            />
            <Route path="/" component={OverviewPage} />
          </Switch>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});
export default connect(mapStateToProps, { setCurrentUser, setSignInModalOpen })(
  App
);
