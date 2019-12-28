/* eslint-disable import/prefer-default-export */
import * as types from './actionTypes';

export const startGame = data => ({
  type: types.START_GAME,
  data
});

export const openCell = data => ({
  type: types.OPEN_CELL,
  data
});

export const openMine = data => ({
  type: types.OPEN_MINE,
  data
});
