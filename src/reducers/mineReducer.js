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

      const data = { ...state.data };
      let status = { halted: false, result: '' };

      if (tableData[row][cell] === CODE.MINE) {
        tableData[row][cell] = CODE.FLAG_MINE;
        const recountMines = state.data.mine === 0 ? 0 : state.data.mine - 1;
        data.mine = recountMines;

        status = observer(recountMines);
      } else {
        tableData[row][cell] = CODE.FLAG;
      }

      const { halted, result } = status;
      return {
        ...state,
        tableData,
        openedCells: state.openedCells + 1,
        halted,
        result,
        data
      };
    }
    case types.NORMALIZE_CELL: {
      const { row, cell } = action.data;
      const tableData = [...state.tableData];
      tableData[row] = [...state.tableData[row]];

      const data = { ...state.data };

      if (tableData[row][cell] === CODE.FLAG_MINE) {
        tableData[row][cell] = CODE.MINE;
        data.mine = state.data.mine + 1;
      } else {
        tableData[row][cell] = CODE.NORMAL;
      }

      return {
        ...state,
        tableData,
        openedCells: state.openedCells - 1,
        data
      };
    }
    case types.INCREASE_TIMER: {
      if (!state.halted) {
        return {
          ...state,
          timer: state.timer + 1
        };
      }
      return state;
    }
    default:
      return state;
  }
};

export default MineReducer;
