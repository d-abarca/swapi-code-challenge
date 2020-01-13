import React from "react";

function PeopleComponent ({people}) {
  return (
    <div className='mt-15'>
      <h3>Person Information</h3>
      {
        // Do not modify the rendering of these fields, change values in backend accordingly
        people && (
          <table className="table table-striped">
            <tbody>
            <tr>
              <th scope="row">Name</th>
              <td>{people.name}</td>
            </tr>
            <tr>
              <th scope="row">Height</th>
              <td>{people.height}</td>
            </tr>
            <tr>
              <th scope="row">Mass</th>
              <td>{people.mass}</td>
            </tr>
            <tr>
              <th scope="row">Hair Color</th>
              <td>{people.hairColor}</td>
            </tr>
            <tr>
              <th scope="row">Skin Color</th>
              <td>{people.skinColor}</td>
            </tr>
            <tr>
              <th scope="row">Eye Color</th>
              <td>{people.eyeColor}</td>
            </tr>
            <tr>
              <th scope="row">Birth Year</th>
              <td>{people.birthYear}</td>
            </tr>
            <tr>
              <th scope="row">Gender</th>
              <td>{people.gender}</td>
            </tr>
            <tr>
              <th scope="row">HomeWorld</th>
              <td>{people.homeworld}</td>
            </tr>
            </tbody>
          </table>
        )
      }
      {
        !people && (
          <div className="card">
            <div className="card-body">
              No person selected
            </div>
          </div>
        )
      }
    </div>
  )
}

export default PeopleComponent
