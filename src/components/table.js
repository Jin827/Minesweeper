/* eslint-disable react/no-array-index-key */
import React from 'react';
// ----- Components ---- //
import Tr from './tr';

const Table = ({ tableData }) => (
  <table>
    <tbody>
      {Array(tableData.length)
        .fill()
        .map((tr, i) => (
          <Tr key={i} rowIndex={i} tableData={tableData} />
        ))}
    </tbody>
  </table>
);

export default Table;
