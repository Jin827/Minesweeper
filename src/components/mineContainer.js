import React, { useEffect } from 'react';
import { connect } from 'react-redux';
// ----- Components ---- //
import Options from './options';
import Table from './table';
import { startGame } from '../actions/mineAction';

const MineContainer = ({
  mineSearch: { tableData, mines, timer, result },
  onStartGame
}) => {
  useEffect(() => () => {});

  return (
    <>
      <Options onStartGame={onStartGame} />
      <p>Timer : {timer}</p>
      {timer !== 0 && <p>Remaining Mines : {mines}</p>}
      <Table />
      <p>Result : {result}</p>
    </>
  );
};

const mapStateToProps = state => ({
  mineSearch: state.mineSearch
});

const mapDispatchToProps = dispatch => ({
  onStartGame: data => dispatch(startGame(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(MineContainer);
