import React from 'react';
import EmployeeCard from './components/EmployeeCard';
import Wrapper from './components/Wrapper';
import API from './utils/API';
import './App.css';

class App extends React.Component {
  state = { employees: [] };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = (query) => {
    API.search(query)
      .then((res) => this.setState({ result: res.data }))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <Wrapper>
        {/* Looping through all the users from the API  */}
        {[...this.state.result].map((item) => (
          <EmployeeCard
            picture={item.picture}
            firstName={item.firstName}
            lastName={item.lastName}
            email={item.email}
            phone={item.phone}
            key={item.key}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
