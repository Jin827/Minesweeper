/* eslint-disable import/prefer-default-export */
import * as types from './actionTypes';

export const startGame = data => ({
  type: types.START_GAME,
  data
});
