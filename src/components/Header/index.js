import React, { Component } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './style.css'

class Header extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" aria-label="Menu">
            <MenuIcon onClick={this.handleDrawerToggle.bind(this)} />
          </IconButton>
          <Typography variant="title" color="inherit">ADA APP</Typography>
        </Toolbar>
      </AppBar>
    </div>
    )
  }

  handleDrawerToggle() {
    this.props.onDrawerToggle();
  }
}

export default Header
