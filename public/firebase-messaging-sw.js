importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/3.9.0/firebase-messaging.js');

firebase.initializeApp({
    apiKey: "AIzaSyB_f8ShvI_PK7cpJhm-CG6t2Ek79WhbXsQ",
    authDomain: "artifexp-gc.firebaseapp.com",
    databaseURL: "https://artifexp-gc.firebaseio.com",
    projectId: "artifexp-gc",
    storageBucket: "artifexp-gc.appspot.com",
    messagingSenderId: "836311540857"
});

const messaging = firebase.messaging();

messaging.setBackgroundMessageHandler(payload => {
    const title = 'Hello World';
    const options = {
        body: payload.data
    };
    return self.registration.showNotification( title, options );
});