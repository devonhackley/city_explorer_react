import React from 'react';

/** Header Component **/
class Header extends React.Component {
  render(){
    return (
      <React.Fragment>
        <header>
          <h1>City Explorer</h1>
          <p>Enter a location below to learn about the weather, events, restaurants, movies filmed there, and more!</p>
        </header>
      </React.Fragment>
    )
  }
}

export default Header;
