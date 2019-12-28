/* eslint-disable react/no-array-index-key */
import React from 'react';
// ----- Components ---- //
import Td from './td';

const Tr = ({ tableData, halted, rowIndex, onOpenCell, onOpenMine }) => (
  <tr>
    {tableData[0] &&
      Array(tableData[0].length)
        .fill()
        .map((td, i) => (
          <Td
            key={i}
            rowIndex={rowIndex}
            cellIndex={i}
            tableData={tableData}
            halted={halted}
            onOpenCell={onOpenCell}
            onOpenMine={onOpenMine}
          />
        ))}
  </tr>
);
export default Tr;
