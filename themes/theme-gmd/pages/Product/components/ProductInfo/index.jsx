import React from 'react';
import PropTypes from 'prop-types';
import styles from './style';

/**
 * @returns {JSX}
 */
function ProductInfo({ backgroundColor, children }) {
  return (
    <div className={styles} style={{ background: backgroundColor }}>
      {children}
    </div>
  );
}

ProductInfo.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundColor: PropTypes.string,
};

ProductInfo.defaultProps = {
  backgroundColor: '#fff',
};

export default ProductInfo;
