import React from 'react';

class Result extends React.Component {
  render(){
    const { results, name} = this.props;
    let resultView = null;
    if(name && results.length) {
      resultView = name.includes('Dark') ? // weather
          (
            results.map((val, idx) => {
              return (
                <li key={idx}>
                  {`The forecast for ${val.time} is: ${val.forecast}`}
                </li>
              );
             })
          ) :
          name.includes('Yelp') ? // yelp
             (
              results.map((val, idx) => {
                return (
                  <li key={idx}>
                  <a href={val.url}>{val.name}</a>
                  <p>The average rating is {val.rating} out of 5 and the average cost is {val.price} out of 4</p>
                  <img src={val.image_url} alt={val.name} />
                  </li>
                );
               })
             ) :
          name.includes('EventBrite') ? //event
            (
              results.map((val, idx) => {
                return (
                  <li key={idx}>
                    <a href={val.link}>{val.name}</a>
                    <p>Event Date: {val.event_date }</p>
                    <p>{val.summary}</p>
                  </li>
                );
               })
            ) :
          name.includes('Movie') ? // movie
               (
                results.map((val, idx) => {
                  return (
                    <li key={idx}>
                      <p><span>{val.title}</span> was relased on {val.released_on}. Out of {val.total_votes} total votes, {val.title} has an average vote of {val.average_votes} and a popularity score of {val.popularity}.</p>
                      <img src={val.image_url} alt={val.title} />
                      <p>{val.overview}</p>
                    </li>
                  );
                 })
               ) :
          name.includes('Hiking') ? // trails
          (
            results.map((val, idx) => {
              return (
                <li key={idx}>
                  <p><span>{val.title}</span> was relased on {val.released_on}. Out of {val.total_votes} total votes, {val.title} has an average vote of {val.average_votes} and a popularity score of {val.popularity}.</p>
                  <img src={val.image_url}  alt={val.title} />
                  <p>{val.overview}</p>
                </li>
              );
             })
           ) :
           (
            <li></li>
           )

    }
               
    return (
      <section className="column-container">
      <h3>Results from the {name} API</h3>
      <ul>
       {resultView}
      </ul>
    </section>
    )
  }
}

export default Result;
