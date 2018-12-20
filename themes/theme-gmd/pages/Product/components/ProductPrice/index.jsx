import React from 'react';
import Price from '../Header/components/Price';
import { ProductContext } from '../../context';

/**
 * @returns {JSX}
 */
function ProductPrice({ color }) {
  return (
    <ProductContext.Consumer>
      {({ productId, variantId, options }) => (
        <Price color={color} productId={variantId || productId} options={options} />
      )}
    </ProductContext.Consumer>
  );
}

export default ProductPrice;
