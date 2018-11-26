import React from 'react';
import './MovieDetails.css';

const MovieDetails = (props) => {
  let details = props.details;
  let contentDetails = <div className="row detailsEmpty"><h4>No movie selected</h4></div>;
  if (details.title) {
    contentDetails = <div className="row details">
      <h3>{details.title}</h3>
      <p>{details.summary}</p>
      <p>Directed by: {details.director}</p>
    </div>
  }

  return (
    <div className="well">
        {contentDetails}
    </div>
  );
}

export default MovieDetails;