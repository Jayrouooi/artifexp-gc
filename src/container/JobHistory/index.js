import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import adPhoto from '../../photo/ad_board.jpg'
import { withStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'

const styles = theme => ({
  card: {
    display: 'flex',
    height: '130px',
    padding: '10px',
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
]

class JobHistory extends Component {
  render() {
    const { classes } = this.props
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span className="sectionTitle">Job History</span>
          <span className="sectionTitle">Total Earn: RM1990</span>
        </div>
        {sampleData.map((list, index) => {
          return (
            <Card className={classes.card}>
              <div style={{ flex: 1, flexDirection: 'column' }}>
                <p className="card-title">Cola-cola advertisement</p>
                <p className="date">10 june 2018</p>
              </div>
              <div style={{ flex: 1 }}>
                <a />
              </div>
            </Card>
          )
        })}
      </div>
    )
  }
}

export default withStyles(styles)(JobHistory)
