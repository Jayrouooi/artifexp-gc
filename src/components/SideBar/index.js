import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import Drawer from '@material-ui/core/Drawer'
import List, { ListItem, ListItemIcon, ListItemText } from '@material-ui/core/List'
import { withStyles } from '@material-ui/core/styles'
import classNames from 'classnames'
import Divider from '@material-ui/core/Divider'
import MailFolderListItems from './SideBarLogo'
import './style.css'
const drawerWidth = 240

const styles = theme => ({
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

  // mailFolderListItems = () => {
  //   return <div />
  // }
  // for sidebar drawer
  handleToggle = () =>
    this.setState({
      open: !this.state.open,
    })

  handleDrawerToggle = () => {
    this.setState({ open: !this.state.open })
  }

  // componentWillMount() {
  //   this.setState({ open: this.props.open });
  // }

  // componentWillReceiveProps( nextProps ) {
  //   this.setState({ open: nextProps.open });
  // }

  render() {
    const { open } = this.state;
    const { classes, theme } = this.props
    return (
      <div>
        <Drawer
          classes={{
            paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.props.open}
          onClose={this.handleClose.bind(this)}
        >
          <Divider />
          <List><MailFolderListItems onClick={this.handleLink.bind(this)} /></List>
        </Drawer>
      </div>
    )
  }

  handleClose() {
    this.props.onDrawerToggle();
  }

  handleLink(link) {
    this.props.onDrawerToggle();
    this.context.router.history.push(link);
  }
}

Siderbar.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Siderbar)
