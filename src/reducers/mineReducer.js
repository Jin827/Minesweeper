import * as types from '../actions/actionTypes';
import { CODE, plantMines, countingMines, observer } from '../utils/mines';

const initialState = {
  tableData: [],
  data: {},
  timer: 0,
  result: '',
  halted: false,
  openedCells: 0
};

const MineReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.START_GAME:
      return {
        ...state,
        tableData: plantMines(action.data),
        data: action.data,
        timer: 0,
        result: '',
        halted: false,
        openedCells: 0
      };
    case types.OPEN_CELL: {
      const { row, cell } = action.data;
      const tableData = [...state.tableData];
      tableData[row] = [...state.tableData[row]];

      const count = countingMines(tableData, row, cell);
      tableData[row][cell] = count;

      const gameChecker = observer(state);
      const { halted, result } = gameChecker;

      return {
        ...state,
        tableData,
        openedCells: state.openedCells + 1,
        halted,
        result
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
        halted: true,
        result: '펑 !!! 폭탄이 터졌어요 ! 다시 시도해보세요 ㅜㅜ'
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

      const status = observer(state);
      const { halted, result } = status;

      return {
        ...state,
        tableData,
        openedCells: state.openedCells + 1,
        halted,
        result,
        data: {
          ...state.data,
          mine: state.data.mine === 0 ? 0 : state.data.mine - 1
        }
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
        tableData,
        openedCells: state.openedCells - 1,
        data: {
          ...state.data,
          mine: state.data.mine + 1
        }
      };
    }
    default:
      return state;
  }
};

export default MineReducer;
