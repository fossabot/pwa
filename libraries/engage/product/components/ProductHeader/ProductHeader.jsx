import React from 'react';
import SurroundPortals from '@shopgate/pwa-common/components/SurroundPortals';
import { PRODUCT_HEADER } from '@shopgate/pwa-common-commerce/product';
import { useWidgetConfig } from '../../../core/hooks';
import { ProductHeaderContext } from './ProductHeader.context';
import { ProductName } from './ProductName';
import { ProductRating } from './ProductRating';
import { ProductInfo } from './ProductInfo';
import { wrapper } from './ProductHeader.styles';

/**
 * The product header component displays the main product information: the product name,
 * availability information, stock information, the price information and the add-to-cart button.
 * @returns {React.Node}
 */
export function ProductHeader() {
  const config = useWidgetConfig('@shopgate/engage/ProductHeader');
  const { styles: { widget = {} } = {}, settings = {} } = config;

  return (
    <ProductHeaderContext.Provider value={config}>
      <SurroundPortals portalName={PRODUCT_HEADER} portalProps={config}>
        <div className={wrapper} style={widget}>
          {!!settings.showRating && <ProductRating />}
          <ProductName />
          <ProductInfo />
        </div>
      </SurroundPortals>
    </ProductHeaderContext.Provider>
  );
}
