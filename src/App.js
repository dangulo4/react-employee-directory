import React from 'react';
import FriendCard from './components/EmployeeCard';
import Wrapper from './components/Wrapper';
// import friends from './friends.json';
import './App.css';

class App extends React.Component {
  state = {
    employees,
  };

  render() {
    return (
      <Wrapper>
        {/* <Title>Friends List</Title> */}
        {this.state.friends.map((friend) => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
