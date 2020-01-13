import React, {Component} from "react";

import '../styles/SearchBox.css'

class SearchBoxComponent extends Component {

  constructor() {
    super();
    this.state = {
      searchField: '',
      searchResults : null,
    }
  }

  onClickSearch = async () => {
    const response = await fetch(`/api/people/?${this.state.searchField}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
      })
    const searchResults = await response.json();
    this.setState({
      searchResults
    })
  }

  renderSearchResults = () => {
    const {searchResults} = this.state
    if(!searchResults) return null;
    if(searchResults.length){
      return (
        <ul className="list-group list-box">
          {searchResults.map(result => (
            <li className="list-group-item" onClick={() => this.props.onPeopleClick(result)}>{result.name}</li>
          ))}
        </ul>
      )
    }
    return (
      <ul className="list-group">
          <li className="list-group-item">No results found</li>
      </ul>
    )
  }

  render() {
    return (
      <React.Fragment>
        <div className="input-group mb-3">
          <input onChange={event => this.setState({searchField: event.target.value})}
                 value={this.state.searchField}
                 type="text"
                 className="form-control"
                 placeholder="Search for a Star Wars Character"
                 aria-label="Recipient's username"
                 aria-describedby="button-addon2" />
          <div className="input-group-append">
            <button onClick={this.onClickSearch} className="btn btn-primary" type="button" id="button-addon2">Search</button>
          </div>
        </div>
        {this.renderSearchResults()}
      </React.Fragment>
    )
  }
}

export default SearchBoxComponent
