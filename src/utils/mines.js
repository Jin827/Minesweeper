/* eslint-disable no-plusplus */
/* eslint-disable import/prefer-default-export */
export const CODE = {
  NORMAL: -1,
  OPEN: -2,
  MINE: -3,
  CLICKED_MINE: -4,
  FLAG: -5,
  FLAG_MINE: -6
};

export const plantMines = data => {
  const { row, cell, mine } = data;
  const candidate = Array(row * cell)
    .fill()
    .map((arr, i) => i);

  // get mines random position
  const shuffle = [];
  while (candidate.length > row * cell - mine) {
    const chosen = candidate.splice(
      Math.floor(Math.random() * candidate.length),
      1
    )[0];
    shuffle.push(chosen);
  }

  const tableData = [];

  for (let i = 0; i < row; i++) {
    const rowData = [];
    tableData.push(rowData);

    for (let j = 0; j < cell; j++) {
      rowData.push(CODE.NORMAL);
    }
  }

  // plant mines
  for (let l = 0; l < shuffle.length; l++) {
    const r = Math.floor(shuffle[l] / cell);
    const c = shuffle[l] % cell;
    tableData[r][c] = CODE.MINE;
  }

  return tableData;
};

export const removeMine = tableData => {
  console.log('tableData: ', tableData);
};

export const observer = state => {
  let halted = false;
  let result = '';
  const { data } = state;

  if (data.row * data.cell - data.mine === state.openedCells + 1) {
    halted = true;
    result = 'Yayyyyyy 승리하셨습니다 !!';
  }

  return { halted, result };
};

export const countingMines = (tableData, row, cell) => {
  let around = [];
  if (tableData[row - 1]) {
    around = around.concat(
      tableData[row - 1][cell - 1],
      tableData[row - 1][cell],
      tableData[row - 1][cell + 1]
    );
  }

  around = around.concat(tableData[row][cell - 1], tableData[row][cell + 1]);

  if (tableData[row + 1]) {
    around = around.concat(
      tableData[row + 1][cell - 1],
      tableData[row + 1][cell],
      tableData[row + 1][cell + 1]
    );
  }

  const count = around.filter(m => [CODE.MINE, CODE.FLAG_MINE].includes(m))
    .length;

  return count;
};
