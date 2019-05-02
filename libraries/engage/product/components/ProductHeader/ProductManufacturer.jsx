import React from 'react';
import { PRODUCT_MANUFACTURER } from '@shopgate/pwa-common-commerce/product';
import { SurroundPortals } from '@shopgate/pwa-common/components';
import PlaceholderLabel from '@shopgate/pwa-ui-shared/PlaceholderLabel';
import Manufacturer from '@shopgate/pwa-ui-shared/Manufacturer';
import { useProduct } from '../../hooks/useProduct';
import { productManufacturer } from './ProductHeader.styles';

/**
 * The Manufacturer component.
 * @param {Object} props The component props.
 * @return {React.Node}
 */
export function ProductManufacturer() {
  const { manufacturer } = useProduct();

  return (
    <SurroundPortals portalName={PRODUCT_MANUFACTURER}>
      <div className={productManufacturer} data-test-id={`manufacturer: ${manufacturer}`}>
        <PlaceholderLabel
          style={{
            height: 16,
            width: '70%',
            marginTop: 5,
            marginBottom: 2,
          }}
          ready={(manufacturer !== null)}
        >
          <Manufacturer text={(manufacturer || '')} />
        </PlaceholderLabel>
      </div>
    </SurroundPortals>
  );
}
