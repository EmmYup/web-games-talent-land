import React, { Component, useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withApp, usePixiTicker } from 'react-pixi-fiber';
import GameRow from '../GameRow';
import { Howl } from 'howler';

const boardSize = {
  width: 12,
  height: 16,
};

var sndLose = new Howl({
  src: 'https://www.noiseforfun.com/waves/fantasy-and-magic/NFF-pure-sweep.wav',
  autoplay: false,
  loop: false,
});

var sndWin = new Howl({
  src: 'https://www.noiseforfun.com/waves/musical-and-jingles/NFF-carillon-02-a.wav',
  autoplay: false,
  loop: false,
});
var sndPop = new Howl({
  src: 'https://www.noiseforfun.com/waves/interface-and-media/NFF-click-switch.wav',
  autoplay: false,
  loop: false,
});

class GameBoard extends Component {
  state = {
    gameState: this.newGameState(true),
  };

  newGameState(active) {
    return {
      rows: new Array(boardSize.height).fill(0),
      first: 0,
      last: this.getBlockWidth(0),
      rowIndex: 0,
      direction: 1,
      won: false,
      lost: false,
      active,
    };
  }

  newGame() {
    this.setState({
      gameState: this.newGameState(true),
    });
  }

  getBlockWidth(rowIndex) {
    switch (true) {
      case rowIndex > 12:
        return 1;
      case rowIndex > 8:
        return 2;
      default:
        return 3;
    }
  }

  gameOver(won) {
    const { gameState } = this.state;
    if (won) {
      gameState.won = true;
      sndWin.play();
    } else {
      gameState.lost = true;
      sndLose.play();
    }
    gameState.active = false;
    this.setState({ gameState });
  }

  handleButton() {
    let { gameState } = this.state;
    if (!gameState.active) {
      this.newGame();
      return;
    }
    // check for game over
    // lose: no overlap between row and previous row
    const { rowIndex } = gameState;
    const overlap =
      rowIndex === 0
        ? gameState.rows[0]
        : gameState.rows[rowIndex] & gameState.rows[rowIndex - 1];

    if (overlap === 0) {
      return this.gameOver(false);
    }
    gameState.rows[rowIndex] = overlap;
    if (gameState.rowIndex === boardSize.height - 1) {
      return this.gameOver(true);
    }
    gameState.rowIndex++;

    // block width gets smaller with higher rowIndex
    gameState.first = 0;
    gameState.last = this.getBlockWidth(gameState.rowIndex);
    sndPop.stop();
    sndPop.play();
    this.setState({ gameState });
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleButton.bind(this));
    document.addEventListener('click', this.handleButton.bind(this));
    document.addEventListener('touchstart', this.handleButton.bind(this));
    this.props.app.ticker.add(this.animate);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', () => false);
    document.removeEventListener('click', () => false);
    document.removeEventListener('touchstart', () => false);
    this.props.app.ticker.remove(this.animate);
  }

  animate = delta => {
    this.setState(state => {
      const { gameState } = state;
      if (gameState.active) {
        const increment = delta * (gameState.rowIndex / 8 + 1) * 0.1;
        // switch direction if needed
        if (
          gameState.last + gameState.direction * increment >
          boardSize.width
        ) {
          gameState.direction = -1;
        }
        if (gameState.first + gameState.direction * increment < -1) {
          gameState.direction = 1;
        }
        // update first and last index
        gameState.first += gameState.direction * increment;
        gameState.last += gameState.direction * increment;

        let row = 0;
        for (let col = 0; col < boardSize.width; col++) {
          if (col >= gameState.first && col <= gameState.last) {
            row |= 2 << col;
          }
        }
        gameState.rows[gameState.rowIndex] = row;
      }
      return {
        ...state,
        gameState,
      };
    });
  };

  render() {
    const { rows } = this.state.gameState;
    return rows.map((row, rowIndex) => (
      <GameRow
        key={rowIndex}
        boardSize={boardSize}
        row={row}
        index={boardSize.height - rowIndex - 1}
      />
    ));
  }
}
GameBoard.contextTypes = {
  app: PropTypes.object,
};

export default withApp(GameBoard);
