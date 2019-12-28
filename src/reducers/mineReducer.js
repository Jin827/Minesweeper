import * as types from '../actions/actionTypes';

const initialState = {
  tableData: {},
  timer: 0,
  result: ''
};

const MineReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_GAME:
      return {
        ...state,
        tableData: action.data
      };
    default:
      return state;
  }
};

export default MineReducer;
