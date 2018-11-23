import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './User';
import AddUser from './AddUser';
/*
This exercise will help you put together and practice all of the concepts you've
learned thus far. It will also help you form a strong foundational knowledge of
React and prepare you for your first project.

The instructions for this project are located in the `instructions.md` file.
*/

class App extends Component {
  state = {
    users: [
      {
        firstName: 'Abhishek',
        lastName: 'Abhishek',
        userName: 'Abhishek',
        showGamesPlayed: true,
        gamesPlayed: 10
      },
      {
        firstName: 'Abhishek0',
        lastName: 'Abhishek0',
        userName: 'Abhishek0',
        showGamesPlayed: true,
        gamesPlayed: 10
      },
      {
        firstName: 'Abhishek1',
        lastName: 'Abhishek1',
        userName: 'Abhishek1',
        showGamesPlayed: true,
        gamesPlayed: 10
      },
      {
        firstName: 'Abhishek2',
        lastName: 'Abhishek2',
        userName: 'Abhishek2',
        showGamesPlayed: true,
        gamesPlayed: 10
      }
    ],
    newUser: {
      firstName: '',
      lastName: '',
      userName: '',
      showGamesPlayed: true,
      gamesPlayed: 0
    }
  };
  addUser(event) {
    /*this.setState(currState => ({
      users: [...currState.users, currState.newUser],
    }));*/
    // event.preventDefault();
    console.log('Added user');
  }

  checkFirstName = (event) => {
    console.log(event);
    this.setState(prevState => ({
      newUser: {...prevState.newUser, firstName: event.target.value}
    }))
  }

  render() {
    return (
      <div>
        <AddUser
          firstName={this.state.newUser.firstName}
          lastName={this.state.newUser.lastName}
          userName={this.state.newUser.userName}
          addUser={this.addUser}
        />
        {this.state.users.map(user => (
          <User
            userName={user.userName}
            showGamesPlayed={user.showGamesPlayed}
            gamesPlayed={user.gamesPlayed}
            key={user.userName}
          />
        ))}
      </div>
    );
  }
}

export default App;
