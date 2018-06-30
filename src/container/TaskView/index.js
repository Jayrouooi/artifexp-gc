import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import './style.css'
import { STATIC_MAP_API } from '../../constants'
import './style.css'

const ActiveData = {
  type: 'active',
  title: 'AirAsia Phuket Billboard',
  company: 'BillBoard Media',
  address: 'E-gate, Lebuh Tengku Kudin 2, 11700 Gelugor, Pulau Pinang',
  start_date: '1st Jan 2018',
  end_date: '31st Dec 2018',
  image: '/assets/images/ad_board.jpg',
  map: {
    center: 'E-gate,+Lebuh+Tengku+Kudin+2,+11700+Gelugor,+Pulau+Pinang',
    zoom: '16',
    markers: 'markers=color:blue%7Clabel:B%7C5.3751537,100.3155579',
  },
}

const ExpiredData = {
  type: 'expired',
  title: 'AirAsia Phuket Billboard',
  company: 'BillBoard Media',
  address: 'E-gate, Lebuh Tengku Kudin 2, 11700 Gelugor, Pulau Pinang',
  start_date: '1st Jan 2018',
  end_date: '31st Dec 2018',
  image: '/assets/images/ad_board.jpg',
  map: {
    center: 'E-gate,+Lebuh+Tengku+Kudin+2,+11700+Gelugor,+Pulau+Pinang',
    zoom: '16',
    markers: 'markers=color:blue%7Clabel:B%7C5.3751537,100.3155579',
  },
}

class TaskView extends Component {
  constructor(props) {
    super(props)

    this.state = {
      verifying: false,
      verified: false,
    }
  }
  static contextTypes = {
    router: PropTypes.object,
  }

  render() {
    const { verifying } = this.state
    const data = this.getData()
    return (
      <div className="task-view">
        <div className={'task-ad-tag ' + data.type}>{data.type}</div>
        <h4 className="task-ad-title">
          {data.title}
          <div className="task-ad-company">By {data.company}</div>
        </h4>
        <div className="task-ad-image">
          <img src={data.image} />
        </div>
        <div className="task-ad-map">
          <img src={this.getMapURL()} />
        </div>
        <table className="task-ad-meta">
          <tbody>
            <tr>
              <th style={{ width: '30%' }}>Address:</th>
              <td>{data.address}</td>
            </tr>
            <tr>
              <th>Start Date:</th>
              <td>{data.start_date}</td>
            </tr>
            <tr>
              <th>End Date:</th>
              <td>{data.end_date}</td>
            </tr>
          </tbody>
        </table>

        <div className="task-ad-actions">
          {verifying ? (
            <button className="verify-btn" style={{ textAlign: 'center' }}>
              <i className="fa fa-spinner fa-pulse" style={{ marginRight: '0px' }} />
            </button>
          ) : (
            this.renderVerifyButton(data)
          )}
          <button className="report-btn" onClick={this.handleClick.bind(this, 'report', data)}>
            <i className="fa fa-exclamation-triangle" />Report
          </button>
        </div>
      </div>
    )
  }

  renderVerifyButton(data) {
    const { verified } = this.state
    return (
      <button className={'verify-btn' + (verified ? ' verified' : '')} onClick={this.handleClick.bind(this, 'verify', data)}>
        <i className={'fa ' + (verified ? 'fa-check-square-o' : 'fa-check-square')} />
        {verified ? 'Verified' : 'Verify'}
      </button>
    )
  }

  getData() {
    const { task_id } = this.props.match.params
    if (task_id == 'expired') return ExpiredData
    else return ActiveData
  }

  getMapURL() {
    const data = this.getData()
    return (
      'https://maps.googleapis.com/maps/api/staticmap?center=' +
      data.map.center +
      '&zoom=' +
      data.map.zoom +
      '&size=600x300&maptype=roadmap&' +
      data.map.markers +
      '&key=' +
      STATIC_MAP_API
    )
  }

  handleClick(type, data, event) {
    const { verified } = this.state
    if (!verified && type == 'verify') {
      this.setState({ verifying: true })
      setTimeout(() => {
        this.setState({ verified: true, verifying: false })
      }, 1250)
    } // end - verified

    if (type == 'report') {
    }
  }
}

export default TaskView
