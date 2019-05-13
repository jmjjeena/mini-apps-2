import { ADD_BOARD } from '../actions/boardActions.js';
import minesweeperReducer, { emptyBoard } from './minesweeperReducer.js';
import store from './store.js'

it('defines a board', () => {
  expect(minesweeperReducer().board).toBeDefined();
});

describe('emptyBoard', () => {
  it('builds an object with 81 keys', () => {
    expect(Object.keys(emptyBoard(9)).length).toEqual(81);
    expect(emptyBoard(9)['3,3']).toBeDefined();
    expect(emptyBoard(9)['18,18']).not.toBeDefined();
  });
});

describe('ADD_BOARD', () => {
  const action = {
    type: ADD_BOARD,
    size: 3,
    mineLocations: ['1,1', '2,2']
  };

  let newState;

  beforeEach(() => {
    newState = minesweeperReducer(store, action);
  });

  // it ('sets the correct hasMine values for the board', () => {
  //   expect(newState.board).toBeDefined();
  // });

  it('sets the correct true hasMine values for the board', () => {
    expect(newState.board['1,1'].hasMine).toEqual(true);
    expect(newState.board['2,2'].hasMine).toEqual(true);
  });

  it('sets the correct true hasMine values for the board', () => {
    expect(newState.board['0,0'].hasMine).toEqual(false);
    expect(newState.board['0,1'].hasMine).toEqual(false);
    expect(newState.board['0,2'].hasMine).toEqual(false);
    expect(newState.board['1,0'].hasMine).toEqual(false);
    expect(newState.board['1,2'].hasMine).toEqual(false);
    expect(newState.board['2,0'].hasMine).toEqual(false);
    expect(newState.board['2,1'].hasMine).toEqual(false);
  });

});