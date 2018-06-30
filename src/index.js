import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import './index.css'
import Routes from './router'
import registerServiceWorker from './registerServiceWorker'

const Main = () => {
  return <Routes />
}

ReactDOM.render(<Main />, document.getElementById('root'))
registerServiceWorker()


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../firebase-messaging-sw.js')
  .then(function(registration) {
    console.log('Registration successful, scope is:', registration.scope);
  }).catch(function(err) {
    console.log('Service worker registration failed, error:', err);
  });
}