import React, { Component } from 'react'
import './App.css'
import SideBar from '../../components/SideBar'
import Header from '../../components/Header'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  render() {
    const { open } = this.state;
    return (
      <div className="root">
        <Header onDrawerToggle={this.handleDrawerToggle.bind(this)} />
        <SideBar onDrawerToggle={this.handleDrawerToggle.bind(this)} open={open} />
        <div className="root-body">{this.props.children}</div>
      </div>
    )
  }

  handleDrawerToggle() {
    const { open } = this.state;
    this.setState({ open: !open });
  }
}

export default App
