import React from 'react';

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

export default Result;
