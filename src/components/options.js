import React, { useState } from 'react';
// ----- Components ---- //
import './options.css';

const Options = () => {
  const [state, setState] = useState({ row: 8, cell: 8, mine: 4 });

  const handleChange = ({ target: { id, value } }) =>
    setState({ ...state, [id]: value });

  const { row, cell, mine } = state;

  return (
    <div className="form">
      <label htmlFor="row">
        가로
        <input
          type="number"
          id="row"
          placeholder="가로"
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
          value={mine}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default Options;
