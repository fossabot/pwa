import React from 'react';
import PropTypes from 'prop-types';
import styles from './style';

/**
 * @returns {JSX}
 */
function ProductInfo({ children }) {
  return (
    <div className={styles}>
      {children}
    </div>
  );
}

ProductInfo.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductInfo;
