import React from 'react';
import { useWidgetConfig } from '@shopgate/engage/core';
import CTAButtons from '../CTAButtons';
import Rating from '../Rating';
import Name from '../Name';
import ProductInfo from '../ProductInfo';
import styles from '../../style';

/**
 * @params {Object} props The component props.
 * @returns {JSX}
 */
function ProductHeaderContent({ productId, variantId, options }) {
  const { styles: { productName } } = useWidgetConfig('@shopgate/engage/ProductHeader');
  const id = variantId || productId;

  return (
    <div className={styles.content}>
      <CTAButtons productId={id} />
      <Rating productId={productId} />
      <Name
        productId={id}
        fontSize={productName.fontSize}
        textAlign={productName.textAlign}
      />
      <ProductInfo productId={id} options={options} />
    </div>
  );
}

export default ProductHeaderContent;
