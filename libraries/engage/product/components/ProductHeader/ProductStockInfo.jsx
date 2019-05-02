import React from 'react';
import { PRODUCT_STOCK_INFO } from '@shopgate/pwa-common-commerce/product';
import { SurroundPortals } from '@shopgate/pwa-common/components';
import PlaceholderLabel from '@shopgate/pwa-ui-shared/PlaceholderLabel';
import AvailableText from '@shopgate/pwa-ui-shared/Availability';
import { useWidgetStyles } from '../../../core/hooks';
import { useProduct } from '../../hooks/useProduct';
import { ProductHeaderContext } from './ProductHeader.context';

/**
 * The StockInfo component.
 * @return {React.Node}
 */
export function ProductStockInfo() {
  const { stock } = useProduct();
  const styles = useWidgetStyles(ProductHeaderContext);

  return (
    <SurroundPortals portalName={PRODUCT_STOCK_INFO}>
      <PlaceholderLabel
        style={{
          height: 16,
          width: '70%',
          marginTop: 5,
          marginBottom: 2,
        }}
        ready={(stock !== null)}
      >
        {!!stock && (
          <AvailableText
            style={styles.stockInfo}
            showWhenAvailable={false}
            text={stock.text}
            state={stock.state}
          />
        )}
      </PlaceholderLabel>
    </SurroundPortals>
  );
}
