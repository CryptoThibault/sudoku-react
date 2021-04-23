import React from 'react';
import Grid from './Grid';

const SudokuApp = ({ startgrid }) => {
  
  return (
    <div>
      <Grid startgrid={startgrid} />
    </div>
  );
};

export default SudokuApp;