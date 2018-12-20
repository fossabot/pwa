import React from 'react';
import { ProductContext } from '../../context';
import Name from '../Header/components/Name';

/**
 * @returns {JSX}
 */
function ProductTitle({ color }) {
  return (
    <ProductContext.Consumer>
      {({ productId, variantId }) => (
        <Name color={color} productId={variantId || productId} />
      )}
    </ProductContext.Consumer>
  );
}

export default ProductTitle;
