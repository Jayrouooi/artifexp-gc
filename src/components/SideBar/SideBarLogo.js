import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import DraftsIcon from '@material-ui/icons/Drafts'
import StarIcon from '@material-ui/icons/Star'
import SendIcon from '@material-ui/icons/Send'
import MailIcon from '@material-ui/icons/Mail'
import DeleteIcon from '@material-ui/icons/Delete'
import ReportIcon from '@material-ui/icons/Report'

class MailFolderListItems extends Component {
  constructor(props) {
    super(props);

  }

  static contextTypes = {
    router: PropTypes.object,
  }

  render() {
    return (
    <div>
      <ListItem button onClick={this.handleClick.bind(this,'/')}>
        <ListItemIcon>
          <i className="fa fa-dashboard" style={{ color: "#212121" }} />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button onClick={this.handleClick.bind(this,'/explore')}>
        <ListItemIcon>
          <i className="fa fa-search" style={{ color: "#212121" }} />
        </ListItemIcon>
        <ListItemText primary="Explore" />
      </ListItem>
      <ListItem button onClick={this.handleClick.bind(this,'/earning')}>
        <ListItemIcon>
        <i className="fa fa-money" style={{ color: "#212121" }} />
        </ListItemIcon>
        <ListItemText primary="Earning" />
      </ListItem>
    </div>
    )
  }

  handleClick(link) {
    this.props.onClick(link);
  }
}

export default MailFolderListItems;

// export const otherMailFolderListItems = (
//   <div>
//     <ListItem button>
//       <ListItemIcon>
//         <MailIcon />
//       </ListItemIcon>
//       <ListItemText primary="All mail" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <DeleteIcon />
//       </ListItemIcon>
//       <ListItemText primary="Trash" />
//     </ListItem>
//     <ListItem button>
//       <ListItemIcon>
//         <ReportIcon />
//       </ListItemIcon>
//       <ListItemText primary="Spam" />
//     </ListItem>
//   </div>
// )
