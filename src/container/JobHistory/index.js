import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import adPhoto from '../../photo/ad_board.jpg'
import { withStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'

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
    status: 'available',
    photo: adPhoto,
  },
]

class JobHistory extends Component {
  render() {
    const { classes, theme } = this.props
    return (
      <div>
        <h2 className="sectionTitle">JobHistory</h2>
        {sampleData.map((list, index) => {
          return (
            <Card className={classes.card}>
              <div className={classes.details}>
                <CardContent className={classes.content}>
                  <h4 className="card-title">{list.title}</h4>
                  <p className="field-1">{list.location}</p>
                  <p className="field-2">{list.status}</p>
                </CardContent>
                <div style={{ flex: '1', alignSelf: 'center' }} />
              </div>
            </Card>
          )
        })}
      </div>
    )
  }
}

export default withStyles(styles)(JobHistory)
