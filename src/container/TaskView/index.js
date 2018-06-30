import React, { Component } from 'react'
import './style.scss'

class TaskView extends Component {
  render() {
    return (
      <div className="task-view">
        <h4 className="task-ad-company">AirAsia Phuket Billboard ( By BillBoard Media)</h4>
        <div className="task-ad-location">123, jalan satu, bandar satu</div>
        <div className="task-ad-image">
          <img src="/assets/images/ad_board.jpg" />
        </div>
        <div className="task-ad-meta">
          <div>Start Date: 1st Jan 2018</div>
          <div>End Date: 31st Dec 2018</div>
        </div>
        
      </div>
    )
  }
}

export default TaskView
