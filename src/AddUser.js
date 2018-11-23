import React, { Component } from 'react';

class AddUser extends React.Component {
  render() {
    return (
      <form>
        <input
          onChange={this.props.checkFirstName}
          type="text"
          value={this.props.firstName}
        />
        <input
          onChange={this.props.checkLastName}
          type="text"
          value={this.props.lastName}
        />
        <input
          type="text"
          onChange={this.props.checkUserName}
          value={this.props.userName}
        />
        <button onClick={this.props.addUser()} disabled={this.props.isDisabled}>
          Add User
        </button>
      </form>
    );
  }
}

export default AddUser;
