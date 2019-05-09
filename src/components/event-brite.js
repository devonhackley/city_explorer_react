import React from 'react';
import Result from './results'
import { makeRequests } from '../helper';


class EventBrite extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      results: []
    }
  }

  // componentDidMount() {
  //   const { location, appURL } = this.props;
  //   if(location && appURL ) {
  //     makeRequests({
  //       url: appURL,
  //       resource: 'events',
  //       data: location
  //    })
  //     .then(results => this.setState({ results }))
  //   }
  // }
  render(){
    const { location, appURL } = this.props;
    if(location && appURL ) {
      makeRequests({
        url: appURL,
        resource: 'events',
        data: location
     })
      .then(results => this.setState({ results }))
    }
    return(
      <Result results={this.state.results}  name={'EventBrite'} />
    );
  }
}

export default EventBrite;