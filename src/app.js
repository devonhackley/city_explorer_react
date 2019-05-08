import React from 'react';

/** Header Component **/
class Header extends React.Component {
  render(){
    return (
      <React.Fragment>
        <h1>City Explorer</h1>
        <p>Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!</p>
      </React.Fragment>
    )
  }
}

/** Search Component **/
class Search  extends React.Component {
  constructor(props){
    super(props);
    this.state ={}
  }
  render(){
    return (
      <React.Fragment>
      <form id="search-form" class="hide">
        <label for="search">Search for a location</label>
        <input type="text" name="search" id="input-search" placeholder="Enter a location here" />
        <button type="submit">Explore!</button>
      </form>
      </React.Fragment>
    )
  }
}

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

        <img src="https://placehold.it/960x450/000" />
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
    this.state = {}
  }
  render(){
    return (
      <React.Fragment>
        <Search />
        <Map />
        <Result />
        <Result />
        <Result />
        <Result />
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