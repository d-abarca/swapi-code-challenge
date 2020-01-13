import React, {Component} from 'react';
import logo from '../logo.svg';
import '../styles/App.css';
import SearchBoxComponent from "./SearchBoxComponent";
import PeopleComponent from "./PeopleComponent";
import FilmComponent from "./FilmComponent";
import StarshipComponent from "./StarshipComponent";
import TokenComponent from "./TokenComponent";

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedPeople: null
    }
  }

  onTokenChange = (event) => {
    // TODO: get Token and add accordingly to BackEnd Calls
  }

  onPeopleClick = (event) => {
    // TODO: implement API Query that calls backend and gathers the necessary data to display
    // Gather ID from event and do the proper API Request to backend
    this.setState({
      people: {
        "name": "Darth Vader",
        "height": "202",
        "mass": "136",
        "hairColor": "none",
        "skinColor": "white",
        "eyeColor": "yellow",
        "birthYear": "41.9BBY",
        "gender": "male",
        "homeworld": "Tatooine",
        "films": [
          {
            title: 'The Empire Strikes Back'
          },
          {
            title: 'Revenge of the Sith'
          }
        ],
        "starships": [
          {
            name: "TIE Advanced x1",
          }
        ],
        "url": "https://swapi.co/api/people/4/"
      }
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Star Wars API Challenge</h1>
        <div className='container'>
          <div className='top-left-corner'>
            <TokenComponent onTokenChange={this.onTokenChange}/>
          </div>
          <div className='col'>
            <SearchBoxComponent onPeopleClick={this.onPeopleClick}/>
          </div>
          <div className="row">
            <div className='col'>
              <PeopleComponent people={this.state.people}/>
            </div>
            <div className='col'>
                <FilmComponent people={this.state.people}/>
                <StarshipComponent people={this.state.people}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
