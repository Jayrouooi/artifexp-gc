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
    console.log('abc');
    const title = payload.notification.title;
    const options = {
       body: payload.notification.body,
       icon: payload.notification.icon
    }
    return registration.showNotification(title, options);
 })