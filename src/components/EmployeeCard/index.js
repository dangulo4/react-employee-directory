import React from 'react';
import './style.css';

function EmployeeCard(props) {
  return (
    <div className="card">
      <div className="content">
        <table className="data-area">
          <thead className="table-header">
            <tr>
              <th>Thumbnail</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Nationality</th>
            </tr>
          </thead>
          <tbody>
            {/* Looping through all the users from the API  */}
            {this.state.users.length ? (
              this.state.people.map((users, i) => {
                return (
                  <tr key={i}>
                    <td>
                      <img src={users.picture.thumbnail} alt="thumbnail" />
                    </td>
                    <td>{users.name.first}</td>
                    <td>{users.name.last}</td>
                    <td>{users.email}</td>
                    <td>{users.gender}</td>
                    <td>{users.nat}</td>
                  </tr>
                );
              })
            ) : (
              <h3 className="no-result-message mt-5">No result to display!</h3>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default EmployeeCard;
