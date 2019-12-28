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

      let around = [];

      if (tableData[row - 1]) {
        around = around.concat(
          tableData[row - 1][cell - 1],
          tableData[row - 1][cell],
          tableData[row - 1][cell + 1]
        );
      }

      around = around.concat(
        tableData[row][cell - 1],
        tableData[row][cell + 1]
      );

      if (tableData[row + 1]) {
        around = around.concat(
          tableData[row + 1][cell - 1],
          tableData[row + 1][cell],
          tableData[row + 1][cell + 1]
        );
      }

      const count = around.filter(m => [CODE.MINE, CODE.FLAG_MINE].includes(m))
        .length;

      tableData[row][cell] = count;

      return {
        ...state,
        tableData
      };
    }
    case types.CLICK_MINE: {
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
    case types.FLAG_CELL: {
      const { row, cell } = action.data;
      const tableData = [...state.tableData];
      tableData[row] = [...state.tableData[row]];

      if (tableData[row][cell] === CODE.MINE) {
        tableData[row][cell] = CODE.FLAG_MINE;
      } else {
        tableData[row][cell] = CODE.FLAG;
      }

      return {
        ...state,
        tableData
      };
    }
    case types.NORMALIZE_CELL: {
      const { row, cell } = action.data;
      const tableData = [...state.tableData];
      tableData[row] = [...state.tableData[row]];

      if (tableData[row][cell] === CODE.FLAG_MINE) {
        tableData[row][cell] = CODE.MINE;
      } else {
        tableData[row][cell] = CODE.NORMAL;
      }

      return {
        ...state,
        tableData
      };
    }
    default:
      return state;
  }
};

export default MineReducer;
