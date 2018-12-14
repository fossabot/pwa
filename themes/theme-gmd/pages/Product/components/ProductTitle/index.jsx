import React from 'react';
import { ProductContext } from '../../context';
import Name from '../Header/components/Name';

/**
 * @returns {JSX}
 */
function ProductTitle() {
  return (
    <ProductContext.Consumer>
      {({ productId, variantId }) => (
        <Name productId={variantId || productId} />
      )}
    </ProductContext.Consumer>
  );
}

export default ProductTitle;
