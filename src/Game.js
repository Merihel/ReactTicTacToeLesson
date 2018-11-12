import React from 'react';
import GameBoard from './GameBoard';
import GameParams from './GameParams';

class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <GameBoard />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
}

export default Game