import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';

/**
 * @param {Object} gridProps The specified grid config.
 * @returns {Object}
 */
function styles(gridProps) {
  return css({
    display: 'grid',
    gridColumnGap: gridProps.columnGap,
    gridRowGap: gridProps.rowGap,
    ...gridProps.rowCount > 1 && { gridTemplateColumns: gridProps.columns },
    ...gridProps.columnCount > 1 && { gridTemplateRows: gridProps.rows },
  });
}

/**
 * @param {Object} props The component props.
 * @returns {JSX}
 */
function Tiles({ children, ...gridProps }) {
  return (
    <div className={styles(gridProps)}>
      {children}
    </div>
  );
}

Tiles.propTypes = {
  children: PropTypes.node.isRequired,
  columnGap: PropTypes.string.isRequired,
  columns: PropTypes.string.isRequired,
  rowGap: PropTypes.string.isRequired,
  rows: PropTypes.string.isRequired,
};

export default Tiles;
