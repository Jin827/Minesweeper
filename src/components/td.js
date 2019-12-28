/* eslint-disable no-alert */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { CODE } from '../utils/mines';
import './td.css';

const getTdStyles = code => {
  switch (code) {
    case CODE.NORMAL:
    case CODE.MINE:
      return { background: '#444' };
    case CODE.CLICKED_MINE:
      return { background: '#E8716F' };
    case CODE.OPEN:
      return { backgournd: 'white' };
    default:
      return { background: 'white' };
  }
};

const Td = ({
  tableData,
  halted,
  rowIndex,
  cellIndex,
  onOpenCell,
  onOpenMine
}) => {
  const code = tableData[rowIndex][cellIndex];

  const handleClick = () => {
    switch (code) {
      case CODE.NORMAL: {
        if (halted) return null;
        return onOpenCell({ row: rowIndex, cell: cellIndex });
      }
      case CODE.MINE: {
        if (halted) return null;
        alert('안타깝네요. 다시 도전해보세요 !!');
        return onOpenMine({ row: rowIndex, cell: cellIndex });
      }
      case CODE.OPEN:
        return null;
      default:
        return null;
    }
  };

  return (
    <td className="td" style={getTdStyles(code)} onClick={handleClick}>
      {code === -5 ? '펑' : ' '}
    </td>
  );
};

export default Td;
