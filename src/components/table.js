/* eslint-disable react/no-array-index-key */
import React from 'react';
// ----- Components ---- //
import Tr from './tr';

const Table = ({ tableData }) => (
  <table>
    <tbody>
      {tableData.length !== 0 &&
        Array(tableData.length)
          .fill()
          .map((tr, i) => <Tr key={i} tableData={tableData} />)}
    </tbody>
  </table>
);

export default Table;
