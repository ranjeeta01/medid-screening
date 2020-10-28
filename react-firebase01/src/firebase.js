import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyCjVXl_9O3FsVnk_3fUBXwiCvs_yeasjr8",
  databaseURL: "https://react-crud-89f62.firebaseio.com",
};
firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();
export const allergyRef = databaseRef.child("allergies")