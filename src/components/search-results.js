import React from 'react';
import DarkSky from './dark-sky';
import Yelp from './yelp';
import MovieDB from './movie';
import EventBrite from './event-brite';
import Trails from './trails';

class SearchResults extends React.Component {
  render(){
    const { location, appURL } = this.props;
    return (
      <>
        <DarkSky location={location}  appURL={appURL} />
        <Yelp location={location}  appURL={appURL} />
        <MovieDB location={location} appURL={appURL} />
        <EventBrite location={location} appURL={appURL} name={'Movie'} />
        <Trails location={location} appURL={appURL} name={'Hiking'} />
      </>
    )
  }

}

export default SearchResults;
