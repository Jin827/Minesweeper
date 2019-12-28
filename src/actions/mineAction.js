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

export const clickMine = data => ({
  type: types.CLICK_MINE,
  data
});

export const flagCell = data => ({
  type: types.FLAG_CELL,
  data
});

export const normalizeCell = data => ({
  type: types.NORMALIZE_CELL,
  data
});
