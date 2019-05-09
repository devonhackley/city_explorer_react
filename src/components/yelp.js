import React from 'react';
import Result from './results'
import { makeRequests } from '../helper';


class Yelp extends React.Component {
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
        resource: 'yelp',
        data: location
     })
      .then(results => this.setState({ results }))
    }
  }
  render(){
    return(
      <Result results={this.state.results} name={'Yelp'} />
    );
  }
}

export default Yelp;