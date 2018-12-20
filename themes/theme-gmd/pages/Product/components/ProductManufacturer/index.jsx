import React from 'react';
import { ProductContext } from '../../context';
import Manufacturer from '../Header/components/Manufacturer';

/**
 * @returns {JSX}
 */
function ProductManufacturer({ color }) {
  return (
    <ProductContext.Consumer>
      {({ productId, variantId }) => (
        <Manufacturer color={color} productId={variantId || productId} />
      )}
    </ProductContext.Consumer>
  );
}

export default ProductManufacturer;
