import React, { Component } from 'react'
import './style.css'
import { PropTypes } from 'prop-types'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"
import InfoBox from 'react-google-maps/lib/components/addons/InfoBox'
import { STATIC_MAP_API } from '../../constants'
//<MarkerItem position={{ lat: 5.375477, lng: 100.315601 }} />
//<MarkerItem position={{ lat: 5.377026, lng: 100.316095 }} />
const MapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={16}
    defaultCenter={{ lat: 5.3751537, lng: 100.3155579 }}
  >
    <MarkerItem position={{ lat: 5.376663, lng: 100.315934 }} image={"/assets/images/ad_board.jpg"} router={props.router} />
    <MarkerItem position={{ lat: 5.376503, lng: 100.316513 }} image={"/assets/images/ad_2.png"} router={props.router} />
    <MarkerItem position={{ lat: 5.374911, lng: 100.315311 }} image={"/assets/images/ad_3.png"} router={props.router} />
    <MarkerItem position={{ lat: 5.373854, lng: 100.315365 }} image={"/assets/images/ad_4.jpg"} router={props.router} />
  </GoogleMap>
));

class MarkerItem extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }
  static contextTypes = {
    router: PropTypes.object,
  }
  render() {
    return (
    <Marker position={this.props.position} onClick={this.handleOpen.bind(this)}>
      { this.state.open ? <InfoBox>
        <div style={{ backgroundColor: "#212121", opacity: 0.85, padding: '5px', width: "100px" }}>
          <div style={{ textAlign: "center" }}>
            <img src={this.props.image} style={{ width: "100%", height: "auto", margin: "0 0 10px 0" }} />
            <button onClick={this.handleLink.bind(this)}><i className="fa fa-search" style={{ marginRight: "0px" }}></i></button>
          </div>
        </div>
      </InfoBox> : null }
    </Marker>
    )
  }
  handleOpen() {
    this.setState({ open: !this.state.open });
    //this.context.router.history("/task/133432");
  }
  handleLink(link) {
    this.context.router.history("/task/133432");
  }
}

class Explore extends Component {
  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }
  static contextTypes = {
    router: PropTypes.object,
  }
  render() {
    return (
      <div className="explore-page">
        <h4 style={{ marginTop: "0px" }}>Explore</h4>
        <MapComponent
          isMarkerShown
          googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key="+STATIC_MAP_API}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <button className="report-btn" style={{ marginLeft: "0px", padding: "10px 25px" }} onClick={this.handleLink.bind(this)}><i className="fa fa-exclamation-triangle" style={{ marginRight: "8px" }} />Report Illegal Placement</button>
        </div>
      </div>
    )
  }

  handleLink() {
    this.context.router.history.push("/task/133432");
  }

}

export default Explore
