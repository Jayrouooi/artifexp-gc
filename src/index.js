import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import Routes from './router'
import registerServiceWorker from './registerServiceWorker'

// firebase cloud messaging
import * as firebase from "firebase";
import { FireApp } from './firebase';

const messaging = firebase.messaging();
messaging.requestPermission()
.then(() => {
  return messaging.getToken();
})
.then(token => {
  console.log(token);
})
.catch(() => {
    console.log('error');
});

messaging.onMessage(payload => {
  console.log("onMessage",payload);
});

const Main = () => {
  return <Routes />
}

ReactDOM.render(<Main />, document.getElementById('root'))
registerServiceWorker();

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../firebase-messaging-sw.js')
  .then(function(registration) {
    console.log('Registration successful, scope is:', registration.scope);
  }).catch(function(err) {
    console.log('Service worker registration failed, error:', err);
  });
}