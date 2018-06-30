import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import Card from '@material-ui/core/Card'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import adPhoto from '../../photo/ad_board.jpg'
import './style.css'
import { withStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import p1 from '../../photo/ad_3.png'
import p2 from '../../photo/ad_4.jpg'
import p3 from '../../photo/ad_board.1.jpg'
import p4 from '../../photo/ad_board.2.jpg'
import p5 from '../../photo/ad_board.3.jpg'

const styles = theme => ({
  card: {
    display: 'flex',
    height: '130px',
    margin: '20px 0',
  },
  details: {
    display: 'flex',
    flexDirection: 'flex-end',
  },
  content: {
    flex: '2 ',
    alignSelf: 'center',
  },
  cover: {
    flex: 1,
    width: 151,
    objectFit: 'cover',
  },
  avatar: {
    width: '60px',
    height: '60px',
    alignSelf: 'center',
    margin: '10px 20px',
    objectFit: 'cover',
  },
  actionButton: {
    border: '1px solid #3f51b5',
    height: '10px',
    alignSelf: 'flex-end',
    margin: '10px',
  },
})

const sampleData = [
  {
    title: 'KDU Billboard',
    location: 'George Town',
    status: 'expired',
    photo: "/assets/images/ad_1.jpg",
    link: '/task/expired'
  },
  {
    title: 'AirAsia Billboard',
    location: 'E-Gate',
    status: 'active',
    photo: p3,
    link: '/task/27'
  },
  {
    title: "Nando's advertisement",
    location: 'George Town',
    status: 'active',
    photo: p1,
    link: '/task/27'
  },
  {
    title: 'Pepsi advertisement ',
    location: 'George Town',
    status: 'active',
    photo: p2,
    link: '/task/27'
  },
  {
    title: 'Soda Drink advertisement ',
    location: 'George Town',
    status: 'active',
    photo: "/assets/images/ad_2.png",
    link: '/task/27'
  },
]

class Dashboard extends Component {
  constructor(props) {
    super(props)
  }
  static contextTypes = {
    router: PropTypes.object,
  }
  render() {
    const { classes } = this.props
    return (
      <div>
        <h2 className="sectionTitle" style={{ margin: "0px 0px 15px 0" }}>Task List</h2>
        {sampleData.map((list, index) => {
          return (
            <Card className={classes.card}>
              <Avatar src={list.photo} classes={{ root: classes.avatar }} />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <h4 className="card-title">{list.title}</h4>
                  <p className="field-1">{list.location}</p>
                  <div className={"task-ad-tag "+list.status}>{list.status}</div>
                </CardContent>
                <div style={{ flex: '1', alignSelf: 'center' }}>
                  <Button
                    classes={{ root: classes.actionButton }}
                    children={'View'}
                    variant="flat"
                    size="small"
                    color="primary"
                    onClick={this.handleLink.bind(this,list.link)}
                  />
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    )
  }

  handleLink(link) {
    this.context.router.history.push(link);
  }
}

export default withStyles(styles)(Dashboard)
