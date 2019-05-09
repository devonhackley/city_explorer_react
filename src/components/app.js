import React from 'react';
import superagent from 'superagent';
import Header from './header';
import SearchForm from './search-form';
import Map from './map';
import Result from './results';

/** Main Component **/
class Main  extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      location: {},
      city: '',
      apiURL: '',
      geoKey: ''
    }
  }
  //handler function that makes requests
  makeRequests = async (obj) => {
    let reqUrl = `${obj.url}/${obj.resource}`;
    console.log('url', reqUrl);
    return  await superagent.get(reqUrl).query({ data: obj.data});
  }

  handleLocationRequest = (obj) => {
    this.setState({ city: obj.data })
    this.makeRequests(obj)
      .then(result => this.setState({ location: result.body }));
  }

  handleFormSubmit = (val) => {
    const { apiURL, geoKey } = this.state;
    !apiURL ? 
      this.setState({ apiURL: val}) :
        !geoKey ?
          this.setState({ geoKey: val}) :
                // make request to location
                this.handleLocationRequest({
                  url: apiURL,
                  resource: 'location',
                  data: val
               })
  }
  render(){
    const { apiURL, geoKey, location } = this.state;
    let form = apiURL && geoKey ? (
      <SearchForm 
        handler={this.handleFormSubmit} 
        appUrl={this.state.apiURL}
        label="Search for a location"
      />
    ) : (
        <React.Fragment>
          <SearchForm 
            handler={this.handleFormSubmit} 
            appUrl={this.state.apiURL}
            label="Enter the URL to your deployed back end, making sure to remove the trailing forward slash"
          />
          <SearchForm 
            handler={this.handleFormSubmit} 
            appUrl={this.state.apiURL}
            label="Enter your Geocoding API Key:"
          />
        </React.Fragment>
    )
    return (
      <React.Fragment>
        {form}
        <Map location={location} geoKey={geoKey}/>
        {/* <SearchResults location={this.state.location}/> */}
        <Result />
      </React.Fragment>
    )
  }
}

/** App Component **/
class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Main />
      </React.Fragment>
    );
  }
}

export default App;