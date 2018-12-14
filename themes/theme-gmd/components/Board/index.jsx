import React from 'react';
import Tiles from '../Tiles';
import Piece from '../Piece';

/**
 * @param {Object} props.grid The grid properties.
 * @returns {JSX}
 */
function Board({ tiles, pieces }) {
  return (
    <Tiles {...tiles}>
      {pieces.map((child, index) => (
        <Piece key={`piece-${index + 1}`} {...child} />
      ))}
    </Tiles>
  );
}

export default Board;
