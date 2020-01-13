import React from "react";

function StarshipComponent ({people}) {
  return (
    <div className='mt-15'>
      <h3>Starship Information</h3>
      {
        // Do not modify the rendering of these fields, change values in backend accordingly
        people && (
          <table className="table table-striped">
            <tbody>
            {
              people.starships.map(starship => (
                <tr>
                  <td>{starship.name}</td>
                </tr>
              ))
            }
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

export default StarshipComponent
