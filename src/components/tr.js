/* eslint-disable react/no-array-index-key */
import React from 'react';
// ----- Components ---- //
import Td from './td';

const Tr = ({ tableData, rowIndex }) => (
  <tr>
    {tableData[0] &&
      Array(tableData[0].length)
        .fill()
        .map((td, i) => (
          <Td key={i} rowIndex={rowIndex} cellIndex={i} tableData={tableData} />
        ))}
  </tr>
);
export default Tr;
