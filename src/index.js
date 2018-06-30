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
