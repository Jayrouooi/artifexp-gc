import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import Drawer from '@material-ui/core/Drawer'
import List, { ListItem, ListItemIcon } from '@material-ui/core/List'
import IconButton from '@material-ui/core/IconButton'
import DashboardIcon from '@material-ui/icons/Dashboard'
import UserListIcon from '@material-ui/icons/AccountBox'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import { mailFolderListItems, otherMailFolderListItems } from './contentLogo'
import Divider from '@material-ui/core/Divider'
const drawerWidth = 240

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 667,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
})

class Siderbar extends Component {
  static contextTypes = {
    router: PropTypes.object,
  }

  constructor(props) {
    super(props)
    this.state = {
      //for toggle sidebar drawer
      open: false,
      docked: true,
    }
  }

  handleChange = value => {
    this.setState({
      selectedIndex: value,
    })
    setTimeout(() => {
      this.context.router.history.push(value)
    }, 150)
  }

  renderDashBoard = () => {
    return (
      <ListItem
        button
        key={1}
        value="/dashboard"
        onClick={() => {
          this.handleChange('/dashboard')
        }}
      >
        <ListItemIcon>
          <DashboardIcon style={{ color: 'black' }} />
        </ListItemIcon>
      </ListItem>
    )
  }

  renderUserList = () => {
    return (
      <ListItem
        button
        key={2}
        value="/user/list"
        onClick={() => {
          this.handleChange('/user/list')
        }}
      >
        <ListItemIcon>
          <UserListIcon style={{ color: 'black' }} />
        </ListItemIcon>
      </ListItem>
    )
  }

  // for sidebar drawer
  handleToggle = () =>
    this.setState({
      open: !this.state.open,
    })

  handleDrawerToggle = () => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const topRole = this.props.topRole
    const role = this.props.rolepermission
    const companyLen = this.props.companyLen
    const { classes, theme } = this.props
    return (
      <div className={classes.root}>
        <AppBar position="absolute" className={classNames(classes.appBar, this.state.open && classes.appBarShift)}>
          <Toolbar disableGutters={!this.state.open}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={classNames(classes.menuButton, this.state.open && classes.hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
              Mini variant drawer
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbar}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mailFolderListItems}</List>
          <Divider />
          <List>{otherMailFolderListItems}</List>
        </Drawer>
      </div>
    )
  }
}

Siderbar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Siderbar)
