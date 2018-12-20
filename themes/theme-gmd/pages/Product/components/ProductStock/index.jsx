import React from 'react';
import { ProductContext } from '../../context';
import StockInfo from '../Header/components/StockInfo';

/**
 * @returns {JSX}
 */
function ProductStockInfo({ colors }) {
  return (
    <ProductContext.Consumer>
      {({ productId, variantId }) => (
        <StockInfo colors={colors} productId={variantId || productId} />
      )}
    </ProductContext.Consumer>
  );
}

export default ProductStockInfo;
