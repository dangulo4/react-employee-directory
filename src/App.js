import React from 'react';
import EmployeeCard from './components/EmployeeCard';
import API from './utils/API';
import './App.css';

class App extends React.Component {
  state = { employees: [] };

  componentDidMount() {
    API.search()
      .then((res) => {
        console.log(res);
        this.setState({
          employees: res.data.results.map((e, i) => ({
            firstName: e.name.first,
            lastName: e.name.last,
            picture: e.picture.large,
            email: e.email,
            phone: e.phone,
            dob: e.age,
            key: i,
          })),
        });
      })
      .catch((err) => console.log(err));
  }

  getEmployees = () => {
    API.search()
      .then((res) => this.setState({ result: res.data }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <div className="container">
        <div>
          <div>
            <h2>Employee Directory</h2>
          </div>
        </div>
        <div>
          <div></div>
        </div>
        <div>
          <table className="table">
            <tr>
              <th>Photo</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>

            {[...this.state.employees].map((item) => (
              <EmployeeCard
                picture={item.picture}
                firstName={item.firstName}
                lastName={item.lastName}
                email={item.email}
                phone={item.phone}
                key={item.key}
              />
            ))}
          </table>
        </div>
      </div>
    );
  }
}

export default App;
