import React from 'react';
import Result from './results'
import { makeRequests } from '../helper';


class DarkSky extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      results: []
    }
  }

  componentDidUpdate() {
    const { location, appURL } = this.props;
    if(location && appURL ) {
      makeRequests({
        url: appURL,
        resource: 'weather',
        data: location
     })
      .then(results => this.setState({ results }))
    }
  }
  render(){
    return(
      <Result results={this.state.results} name={'Dark Sky'}/>
    );
  }
}

export default DarkSky;