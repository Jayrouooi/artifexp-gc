import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import adPhoto from '../../photo/ad_board.jpg'
import './style.css'
import { withStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import Check from '@material-ui/icons/Check'
import Clear from '@material-ui/icons/Clear'
import Typography from '@material-ui/core/Typography'

const styles = theme => ({
  card: {
    display: 'flex',
    height: '130px',
  },
  details: {
    display: 'flex',
    flexDirection: 'flex-end',
  },
  content: {
    flex: '2 0 auto',
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
    margin: '10px',
    objectFit: 'cover',
  },
  actionButton: {
    border: '1px solid #3f51b5',
    height: '10px',
    alignSelf: 'center',
    marginLeft: '30px',
  },
})

const sampleData = [
  {
    title: 'Coca-cola advertistment ',
    location: '16, Gat Lebuh China, George Town, 10300 George Town, Pulau Pinang',
    status: 'available',
    photo: adPhoto,
  },
  {
    title: 'Coca-cola advertistment ',
    location: '16, Gat Lebuh China, George Town, 10300 George Town, Pulau Pinang',
    status: 'available',
    photo: adPhoto,
  },
  {
    title: 'Coca-cola advertistment ',
    location: '16, Gat Lebuh China, George Town, 10300 George Town, Pulau Pinang',
    status: 'available',
    photo: adPhoto,
  },
  {
    title: 'Coca-cola advertistment ',
    location: '16, Gat Lebuh China, George Town, 10300 George Town, Pulau Pinang',
    status: 'available',
    photo: adPhoto,
  },
  {
    title: 'Coca-cola advertistment ',
    location: '16, Gat Lebuh China, George Town, 10300 George Town, Pulau Pinang',
    photo: adPhoto,
  },
]

class Dashboard extends Component {
  render() {
    const { classes, theme } = this.props
    return (
      <div>
        <h2 className="sectionTitle"> Task List</h2>
        {sampleData.map((list, index) => {
          return (
            <Card className={classes.card}>
              <Avatar src={adPhoto} classes={{ root: classes.avatar }} />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <h4>{list.title}</h4>
                  <p>{list.location}</p>
                  <p>{list.status}</p>
                </CardContent>
              </div>
              <Button classes={{ root: classes.actionButton }} children={'View'} variant="flat" size="small" color="primary" />
            </Card>
          )
        })}
      </div>
    )
  }
}

export default withStyles(styles)(Dashboard)
