import React, { Component } from 'react'
import './App.css'
import SideBar from '../../components/SideBar'
import Header from '../../components/Header'

class App extends Component {
  render() {
    return (
      <div className="root">
        <Header />
        <SideBar />
        {this.props.children}
      </div>
    )
  }
}

export default App
