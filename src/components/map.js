import React from 'react';

/** Map Component **/
class Map extends React.Component {
  render(){
    return (
      <React.Fragment>
        <img id="map" style={this.props.location.latitude ? {display : 'block'} : {display: 'none'}}src={`https://maps.googleapis.com/maps/api/staticmap?center=${this.props.location.latitude}%2c%20${this.props.location.longitude}&zoom=13&size=600x300&maptype=roadmap
  &key=${this.props.geoKey}`} alt="Map of search query" />
      </React.Fragment>
    )
  }
}

export default Map;