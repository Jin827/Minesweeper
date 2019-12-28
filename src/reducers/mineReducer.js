import * as types from '../actions/actionTypes';

const initialState = {
  tableData: [],
  timer: 0,
  result: ''
};

const MineReducer = (state = initialState, action) => {
  console.log(action.data);
  switch (action.type) {
    case types.START_GAME:
      return {
        ...state,
        tableData: []
      };
    default:
      return state;
  }
};

export default MineReducer;
