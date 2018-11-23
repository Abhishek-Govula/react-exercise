import React from 'react';

const User = props => {
  return (
    <div className="user">
      <div className="user-name">
        {props.userName}
      </div>
      <div className="user-games">{props.showGamesPlayed ? props.gamesPlayed : ''}</div>
    </div>
  );
};
export default User;
