import { ADD_BOARD } from '../actions/boardActions'
import store from './store.js';

const emptyBoard = (boardSize) => {
  const board = {};
    for (let i = 0; i < boardSize; i++ ) {
      for (let j = 0; j < boardSize; j++) {
        const coordinate = `${i},${j}`;
        board[coordinate] = { ...store.defaultCell };
      }
    }
  return board;
};

const minesweeperReducer = (state = store, action = {type: ""}) => {
  switch (action.type) {
    case ADD_BOARD:
    const boardSize = action.size
    const board = emptyBoard(boardSize);
    action.mineLocations.forEach((coordinate) => {
      board[coordinate].hasMine = true;
    });

    for (let i = 0; i < boardSize; i++ ) {
      for (let j = 0; j < boardSize; j++) {
        const coordinate = `${i},${j}`;
        if(board[coordinate].hasMine) {
          continue;
        }
        let mineCount = 0;

        for (let k = i - 1; k <= i + 1; k++ ) {
          for (let l = j - 1; l <= j + 1; l++) {
            const mineCheckCoords = `${k},${l}`;
            if (board[mineCheckCoords] && board[mineCheckCoords].hasMine) {
              mineCount++;
            }
          }
        }
        board[coordinate].count = mineCount;
      }
    }

    return { ...state, board };
    default:
      return state;
  }
};

export { minesweeperReducer as default, emptyBoard };