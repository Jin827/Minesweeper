import React from 'react';
import './td.css';

const Td = ({ tableData, rowIndex, cellIndex }) => (
  <td className="td">{tableData[rowIndex][cellIndex]}</td>
);

export default Td;
