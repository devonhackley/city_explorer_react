import React from 'react';

/** Search Component **/
class SearchForm  extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    }
  }
  handleChange = e => {
    this.setState({value: e.target.value});
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.handler(this.state.value);
  }
  render(){
    const { appUrl, label } = this.props;
    return (
      <React.Fragment>
        <form id="search-form" className="hide" onSubmit={this.handleSubmit}>
        <label htmlFor="search">{label}</label>
        <input type="text" name="search" id="input-url-search" value={this.state.value} onChange={this.handleChange}/>
        {appUrl && label.includes("location") ? <button type="submit">Explore!</button> : ''}
        </form>
      </React.Fragment>
    )
  }
}

export default SearchForm;

