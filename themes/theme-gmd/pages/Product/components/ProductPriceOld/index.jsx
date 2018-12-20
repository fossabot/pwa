import React from 'react';
import PriceStriked from '../Header/components/PriceStriked';
import { ProductContext } from '../../context';

/**
 * @returns {JSX}
 */
function ProductPrice({ color }) {
  return (
    <ProductContext.Consumer>
      {({ productId, variantId, options }) => (
        <PriceStriked color={color} productId={variantId || productId} options={options} />
      )}
    </ProductContext.Consumer>
  );
}

export default ProductPrice;
