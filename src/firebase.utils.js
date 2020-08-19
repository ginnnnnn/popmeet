import firebase from 'firebase/app';
//import firestore and auth
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCAhP3IsKqQwh-Kwek2_yOgPSESwW1ZB5w',
  authDomain: 'pop-meet.firebaseapp.com',
  databaseURL: 'https://pop-meet.firebaseio.com',
  projectId: 'pop-meet',
  storageBucket: 'pop-meet.appspot.com',
  messagingSenderId: '905982567976',
  appId: '1:905982567976:web:d740f75087ac55566bb71d',
  measurementId: 'G-4VQSBWP7BC',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
//firestore
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
const fbProvider = new firebase.auth.FacebookAuthProvider();
fbProvider.setCustomParameters({ display: 'popup' });

export const signInwithGoogle = () => auth.signInWithPopup(provider);
export const signInwithFacebook = () => auth.signInWithPopup(fbProvider);
// create profile in db
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  //making reference synchonus
  const useRef = firestore.doc(`users/${userAuth.uid}`);
  // get data async
  const userSnapshot = await useRef.get();
  if (!userSnapshot.exists) {
    //make one
    const { displayName, email, photoURL } = userAuth;
    const createAt = new Date();
    try {
      useRef.set({
        displayName,
        email,
        createAt,
        photoURL,
        ...additionalData,
      });
    } catch (err) {
      console.log('error creating user', err.message);
    }
  }
  return useRef;
};

export const createActivityWithUserID = async (uid, activityToAdd) => {
  const collectionRef = firestore.collection('activities');
  const activityRes = await collectionRef.add({
    ...activityToAdd,
    createAt: new Date(),
  });
  //add self to approved
  const approvedCollectionRef = firestore.collection(
    `activities/${activityRes.id}/approved`
  );
  await approvedCollectionRef.add({ uid: uid, approvedAt: new Date() });
  const userActivitiesRef = firestore.collection(`users/${uid}/my-activities`);
  const res = await userActivitiesRef.add({
    activityId: activityRes.id,
  });
  console.log(res);
  return collectionRef;
};

export default firebase;
