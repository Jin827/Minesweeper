import * as types from '../actions/actionTypes';
import { plantMines } from '../utils/mines';

const initialState = {
  tableData: [],
  mines: 0,
  timer: 0,
  result: ''
};

const MineReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_GAME:
      return {
        ...state,
        tableData: plantMines(action.data),
        mines: action.data.mine
      };
    default:
      return state;
  }
};

export default MineReducer;
