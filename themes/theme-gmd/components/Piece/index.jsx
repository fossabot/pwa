import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { configurables } from '@shopgate/pwa-common/collections';
import Board from '../Board';

/**
 * @param {Object} dimensions The grid dimensions.
 * @return {JSX}
 */
function gridArea({
  top, left, width, height,
}) {
  return css({
    gridArea: `${top} / ${left} / ${top + height} / ${left + width}`,
  });
}

/**
 * @returns {JSX}
 */
function Piece({
  children, dimensions, grid, name, properties,
}) {
  const Component = configurables.get(name);

  if (!Component) {
    return null;
  }

  return (
    <div className={gridArea(dimensions)}>
      <Component {...properties}>
        {(children && children.length) && <Board tiles={grid} pieces={children} />}
      </Component>
    </div>
  );
}

Piece.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Piece;
