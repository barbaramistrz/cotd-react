import Rebase from "re-base";
import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDkgObQaNHuRimzXv8X1Nt61Xww7IOWZTc",
  authDomain: "catch-of-the-day-basia.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-basia.firebaseio.com",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };
export default base;