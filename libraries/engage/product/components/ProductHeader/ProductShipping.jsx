import React from 'react';
import { PRODUCT_SHIPPING } from '@shopgate/pwa-common-commerce/product';
import { SurroundPortals } from '@shopgate/pwa-common/components';
import PlaceholderLabel from '@shopgate/pwa-ui-shared/PlaceholderLabel';
import { useProduct } from '../../hooks/useProduct';
import { ProductShippingLabel } from './ProductShippingLabel';

/**
 * The Shipping Info component.
 * @param {Object} props The component props.
 * @return {React.Node}
 */
export function ProductShipping() {
  const { shipping } = useProduct();

  return (
    <SurroundPortals portalName={PRODUCT_SHIPPING}>
      <PlaceholderLabel
        style={{
          height: 16,
          width: '70%',
          marginTop: 5,
          marginBottom: 2,
        }}
        ready={(shipping !== null)}
      >
        {shipping && typeof shipping.price !== 'undefined' && shipping.price !== null && (
          <ProductShippingLabel price={shipping.price} currency={shipping.currency} />
        )}
      </PlaceholderLabel>
    </SurroundPortals>
  );
}
