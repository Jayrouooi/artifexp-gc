import * as firebase from "firebase";

export const fbCred = {
    apiKey: "AIzaSyB_f8ShvI_PK7cpJhm-CG6t2Ek79WhbXsQ",
    authDomain: "artifexp-gc.firebaseapp.com",
    databaseURL: "https://artifexp-gc.firebaseio.com",
    projectId: "artifexp-gc",
    storageBucket: "artifexp-gc.appspot.com",
    messagingSenderId: "836311540857"
};

export const FireApp = firebase.initializeApp(fbCred);