import React from 'react';

const Search = (props) => {
  return (
    <div className="col-xs-9 col-sm-11">
      <div className="filter-list">
          <form>
              <fieldset className="form-group">
                  <input type="text" className="form-control form-control-lg" placeholder="Type to search" onChange={(event)=>{props.filterList(event)}}/>
              </fieldset>
          </form>
      </div>
    </div>
  )
}

export default Search;