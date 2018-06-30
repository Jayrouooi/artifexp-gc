import React, { Component } from 'react'
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
    margin: '20px',
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
    margin: '10px',
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
    title: 'Coca-cola advertistment ',
    location: '16, Gat Lebuh China, George Town, 10300 George Town, Pulau Pinang',
    status: 'available',
    photo: p1,
  },
  {
    title: 'Pepsi advertistment ',
    location: '16, Gat Lebuh China, George Town, 10300 George Town, Pulau Pinang',
    status: 'available',
    photo: p2,
  },
  {
    title: '7-up advertistment ',
    location: '16, Gat Lebuh China, George Town, 10300 George Town, Pulau Pinang',
    status: 'available',
    photo: p3,
  },
  {
    title: 'Greenday advertistment ',
    location: '16, Gat Lebuh China, George Town, 10300 George Town, Pulau Pinang',
    status: 'available',
    photo: p4,
  },
  {
    title: 'Soda Drink advertistment ',
    location: '16, Gat Lebuh China, George Town, 10300 George Town, Pulau Pinang',
    status: 'available',
    photo: p5,
  },
]

class Dashboard extends Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <h2 className="sectionTitle"> Task List</h2>
        {sampleData.map((list, index) => {
          return (
            <Card className={classes.card}>
              <Avatar src={list.photo} classes={{ root: classes.avatar }} />
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <h4 className="card-title">{list.title}</h4>
                  <p className="field-1">{list.location}</p>
                  <p className="field-2">{list.status}</p>
                </CardContent>
                <div style={{ flex: '1', alignSelf: 'center' }}>
                  <Button
                    classes={{ root: classes.actionButton }}
                    children={'View'}
                    variant="flat"
                    size="small"
                    color="primary"
                  />
                </div>
              </div>
            </Card>
          )
        })}
      </div>
    )
  }
}

export default withStyles(styles)(Dashboard)
