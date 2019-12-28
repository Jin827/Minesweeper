import * as types from '../actions/actionTypes';
import { CODE, plantMines } from '../utils/mines';

const initialState = {
  tableData: [],
  mines: 0,
  timer: 0,
  result: '',
  halted: false
};

const MineReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_GAME:
      return {
        ...state,
        tableData: plantMines(action.data),
        mines: action.data.mine,
        timer: 0,
        result: '',
        halted: false
      };
    case types.OPEN_CELL: {
      const { row, cell } = action.data;
      const tableData = [...state.tableData];
      tableData[row] = [...state.tableData[row]];
      tableData[row][cell] = CODE.OPEN;

      return {
        ...state,
        tableData
      };
    }
    case types.OPEN_MINE: {
      const { row, cell } = action.data;
      const tableData = [...state.tableData];
      tableData[row] = [...state.tableData[row]];
      tableData[row][cell] = CODE.CLICKED_MINE;

      return {
        ...state,
        tableData,
        halted: true
      };
    }
    default:
      return state;
  }
};

export default MineReducer;
