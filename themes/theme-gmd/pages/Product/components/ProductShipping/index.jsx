import React from 'react';
import PropTypes from 'prop-types';
import colors from 'Styles/colors';
import { ProductContext } from '../../context';
import Shipping from '../Header/components/Shipping';

/**
 * @returns {JSX}
 */
function ProductShipping({ color }) {
  return (
    <ProductContext.Consumer>
      {({ productId, variantId }) => (
        <div style={{ color }}>
          <Shipping productId={variantId || productId} />
        </div>
      )}
    </ProductContext.Consumer>
  );
}

ProductShipping.propTypes = {
  color: PropTypes.string,
};

ProductShipping.defaultProps = {
  color: colors.success,
};

export default ProductShipping;
