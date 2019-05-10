import React from 'react';
import DarkSky from './dark-sky';
import Yelp from './yelp';
import MovieDB from './movie';
import EventBrite from './event-brite';
import Trails from './trails';

class SearchResults extends React.Component {
  render(){
    const { location, appURL } = this.props;
    let results = location.id && appURL ? (
        <>
          <h2 className="query-placeholder">Here are the results for {location.formatted_query}</h2>
          <div className="column-container">
            <DarkSky location={location}  appURL={appURL} />
            <Yelp location={location}  appURL={appURL} />
            <EventBrite location={location} appURL={appURL} />
            <MovieDB location={location} appURL={appURL} />
            <Trails location={location} appURL={appURL} />
          </div>
        </>
    ) : (
      <></>
    );


    return (
      <>
        {results}
      </>
    )
  }

}

export default SearchResults;
