import React from 'react';
import Result from './results'
import { makeRequests } from '../helper';


class Trails extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      results: []
    }
  }

  componentDidMount() {
    const { location, appURL } = this.props;
    if(location && appURL ) {
      makeRequests({
        url: appURL,
        resource: 'trails',
        data: location
     })
      .then(results => this.setState({ results: results.body }))
    }
  }

  componentDidUpdate(prevProps) {
    const { location, appURL } = this.props;
    if (this.props.location !== prevProps.location) {
      makeRequests({
        url: appURL,
        resource: 'trails',
        data: location
     })
      .then(results => this.setState({ results: results.body }))
    }
  }

  render(){
    return(
      <Result results={this.state.results} name={'Hiking'} />
    );
  }
}

export default Trails;