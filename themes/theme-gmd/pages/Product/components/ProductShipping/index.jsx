import React from 'react';
import { ProductContext } from '../../context';
import Shipping from '../Header/components/Shipping';

/**
 * @returns {JSX}
 */
function ProductShipping() {
  return (
    <ProductContext.Consumer>
      {({ productId, variantId }) => (
        <Shipping productId={variantId || productId} />
      )}
    </ProductContext.Consumer>
  );
}

export default ProductShipping;
