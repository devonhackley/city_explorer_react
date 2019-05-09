import React from 'react';
import Header from './header';
import SearchForm from './search-form';



/** Map Component **/
class Map extends React.Component {
  constructor(props){
    super(props);
    this.state ={}
  }
  render(){
    return (
      <React.Fragment>
        {/* <img id="map" class="hide" src="https://www.google.com/maps/place/Seattle,+WA/@47.6129432,-122.4821475,11z/data=!3m1!4b1!4m5!3m4!1s0x5490102c93e83355:0x102565466944d59a!8m2!3d47.6062095!4d-122.3320708" alt="Map of search query" /> */}

        <img src="https://placehold.it/960x450/000" alt="placeh"/>
      </React.Fragment>
    )
  }
}

class Result extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render(){
    return (
      <section>
      <h3>Results from the some API</h3>
      <ul>
        <li>We are Groot</li>
        <li>I am Groot</li>
        <li>We are Groot</li>
        <li>I am Groot</li>
      </ul>
    </section>
    )
  }
}

/** Main Component **/
class Main  extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      location: {},
      apiURL: '',
      geoKey: ''
    }
  }
  //handler function that makes requests
  // makeRequests = () => {

  // }
  handleFormSubmit = (val) => {
    const { apiURL, geoKey, location } = this.state;
    !apiURL ? 
      this.setState({ apiURL: val}) :
        !geoKey ?
          this.setState({ geoKey: val}) :
            console.log('stuff');
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
        <Map location={location} geoKey/>
        {/* <SearchResults location={this.state.location}/> */}
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