import React from 'react';
import { ProductContext } from '../../context';
import ImageSlider from '../ImageSlider';

/**
 * @returns {JSX}
 */
function ProductImageSlider() {
  return (
    <ProductContext.Consumer>
      {({ productId, variantId }) => (
        <div style={{ maxWidth: '100vw' }}>
          <ImageSlider productId={productId} variantid={variantId} />
        </div>
      )}
    </ProductContext.Consumer>
  );
}

export default ProductImageSlider;
