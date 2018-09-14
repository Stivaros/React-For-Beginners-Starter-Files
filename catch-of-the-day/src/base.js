import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAZwrYODKFg5rkdRy9c0KGBvLF4ZWv8Unc",
    authDomain: "catch-of-the-day-eps.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-eps.firebaseio.com",
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;