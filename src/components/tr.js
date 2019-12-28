/* eslint-disable react/no-array-index-key */
import React from 'react';
// ----- Components ---- //
import Td from './td';

const Tr = ({ tableData }) => (
  <tr>
    {Array(tableData[0].length)
      .fill()
      .map((td, i) => (
        <Td key={i} />
      ))}
  </tr>
);
export default Tr;
