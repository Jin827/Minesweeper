import React, { useState } from 'react';
// ----- Components ---- //
import './options.css';

const Options = ({ onStartGame }) => {
  const [state, setState] = useState({ row: 8, cell: 8, mine: 4 });

  const handleChange = ({ target: { id, value } }) =>
    setState({ ...state, [id]: value });

  const handleClick = () => onStartGame(state);

  const { row, cell, mine } = state;

  return (
    <div className="form">
      <label htmlFor="row">
        가로
        <input
          type="number"
          id="row"
          placeholder="가로"
          className="form--input"
          value={row}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="cell">
        세로
        <input
          type="number"
          id="cell"
          placeholder="세로"
          className="form--input"
          value={cell}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="mine">
        지뢰
        <input
          type="number"
          id="mine"
          placeholder="지뢰"
          className="form--input"
          value={mine}
          onChange={handleChange}
        />
      </label>
      <button type="button" className="form--btn" onClick={handleClick}>
        시작
      </button>
    </div>
  );
};

export default Options;
