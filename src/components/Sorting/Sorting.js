import React from 'react';
import './Sorting.css';

const Sorting = (props) => {
  return (
    <div className="col-xs-3 col-sm-1 dropdown">
      <button className="btn btn-default">Sort by ... </button>
      <div className="dropdown-content">
        <p className='episodeButton' onClick={()=>{props.sortBy('episode')}}>Episode</p>
        <p className='yearButton' onClick={()=>{props.sortBy('year')}}>Year</p>
      </div>
    </div>
  )
}

export default Sorting;