import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const Header = props => {
  return (
    <div>
      <AppBar position="absolute">
        <Toolbar>
          <Typography variant="title" color="inherit" />
        </Toolbar>
      </AppBar>
    </div>
  )
}
export default Header
