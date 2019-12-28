/* eslint-disable react/no-array-index-key */
import React from 'react';
// ----- Components ---- //
import Tr from './tr';

const Table = ({ tableData, halted, onOpenCell, onOpenMine }) => (
  <table>
    <tbody>
      {Array(tableData.length)
        .fill()
        .map((tr, i) => (
          <Tr
            key={i}
            rowIndex={i}
            tableData={tableData}
            halted={halted}
            onOpenCell={onOpenCell}
            onOpenMine={onOpenMine}
          />
        ))}
    </tbody>
  </table>
);

export default Table;
