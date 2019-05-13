import { ADD_BOARD } from '../actions/boardActions'
import store from './store.js';

const emptyBoard = (boardSize) => {
  const board = {};
    for (let i = 0; i < boardSize; i++ ) {
      for (let j = 0; j < boardSize; j++) {
        const coordinate = `${i},${j}`;
        board[coordinate] = {};
      }
    }
  return board;
};

const minesweeperReducer = (state = store, action = {type: ""}) => {
  switch (action.type) {
    case ADD_BOARD:
    const board = {};
      for (let i = 0; i < action.size; i++ ) {
        for (let j = 0; j < action.size; j++) {
          const coordinate = `${i},${j}`;
          board[coordinate] = {};
          board[coordinate].hasMine = action.mineLocations.includes(coordinate);
        }
      }
      return {...state, board};
    default:
      return state
  }
};

export { minesweeperReducer as default, emptyBoard };