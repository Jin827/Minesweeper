/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useCallback } from 'react';
import { connect } from 'react-redux';
// ----- Components ---- //
import { CODE } from '../utils/mines';
import {
  openCell,
  clickMine,
  flagCell,
  normalizeCell
} from '../actions/mineAction';
import './td.css';

const getTdStyles = code => {
  switch (code) {
    case CODE.NORMAL:
    case CODE.MINE:
      return { background: '#444' };
    case CODE.CLICKED_MINE:
    case CODE.OPEN:
      return { background: 'white' };
    case CODE.FLAG:
    case CODE.FLAG_MINE:
      return { background: '#E8716F' };
    default:
      return { background: 'white' };
  }
};

const getTdText = code => {
  switch (code) {
    case CODE.NORMAL:
      return '';
    case CODE.MINE:
      return 'X';
    case CODE.CLICKED_MINE:
      return '펑';
    case CODE.FLAG:
    case CODE.FLAG_MINE:
      return '!';
    default:
      return code || '';
  }
};

const Td = ({
  mineSearch: { tableData, halted },
  rowIndex,
  cellIndex,
  onOpenCell,
  onClickMine,
  onNormalizeCell,
  onFlagCell
}) => {
  const code = tableData[rowIndex][cellIndex];

  const handleClickTd = useCallback(() => {
    if (halted) {
      return null;
    }
    switch (code) {
      case CODE.NORMAL:
        return onOpenCell({ row: rowIndex, cell: cellIndex });
      case CODE.MINE:
        return onClickMine({ row: rowIndex, cell: cellIndex });
      case CODE.OPEN:
      case CODE.FLAG:
      case CODE.FLAG_MINE:
        return null;
      default:
        return null;
    }
  }, [code]);

  const handleRightClickTd = useCallback(
    e => {
      e.preventDefault();

      if (halted) {
        return null;
      }
      switch (code) {
        case CODE.NORMAL:
        case CODE.MINE:
          return onFlagCell({ row: rowIndex, cell: cellIndex });
        case CODE.FLAG:
        case CODE.FLAG_MINE:
          return onNormalizeCell({ row: rowIndex, cell: cellIndex });
        default:
          return null;
      }
    },
    [code]
  );

  return (
    <td
      className="td"
      style={getTdStyles(code)}
      onClick={handleClickTd}
      onContextMenu={handleRightClickTd}
    >
      {getTdText(code)}
    </td>
  );
};

const mapStateToProps = state => ({
  mineSearch: state.mineSearch
});

const mapDispatchToProps = dispatch => ({
  onOpenCell: data => dispatch(openCell(data)),
  onClickMine: data => dispatch(clickMine(data)),
  onNormalizeCell: data => dispatch(normalizeCell(data)),
  onFlagCell: data => dispatch(flagCell(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(Td);
