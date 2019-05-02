import React from 'react';
import { PRODUCT_INFO, PRODUCT_INFO_ROW1 } from '@shopgate/pwa-common-commerce/product';
import { SurroundPortals, Grid } from '@shopgate/pwa-common/components';
import MapPriceHint from '@shopgate/pwa-ui-shared/MapPriceHint';
import { useWidgetSettings, useWidgetStyles, useCurrentProduct } from '../../../core/hooks';
import { ProductHeaderContext } from './ProductHeader.context';
import { ProductManufacturer } from './ProductManufacturer';
import { ProductShipping } from './ProductShipping';
import { ProductAvailability } from './ProductAvailability';
import { ProductStockInfo } from './ProductStockInfo';

/**
 * @param {Object} props The component props.
 * @returns {React.Node}
 */
export function ProductInfo() {
  const { productId, variantId } = useCurrentProduct();
  const settings = useWidgetSettings(ProductHeaderContext);
  const styles = useWidgetStyles(ProductHeaderContext);

  return (
    <SurroundPortals portalName={PRODUCT_INFO}>
      <Grid component="div">
        <Grid.Item component="div" grow={1}>
          <SurroundPortals portalName={PRODUCT_INFO_ROW1}>
            <div style={styles.info}>
              <MapPriceHint location="pdp" productId={variantId || productId} />
            </div>
            {!!settings.showManufacturer && (
              <div style={styles.info}>
                <ProductManufacturer />
              </div>
            )}
            {!!settings.showShipping && (
              <div style={styles.info}>
                <ProductShipping />
              </div>
            )}
            {!!settings.showAvailability && (
              <div style={styles.info}>
                <ProductAvailability />
              </div>
            )}
            {!!settings.showStockInfo && (
              <div style={styles.info}>
                <ProductStockInfo />
              </div>
            )}
          </SurroundPortals>
        </Grid.Item>
        <Grid.Item component="div" style={styles.prices}>
        </Grid.Item>
      </Grid>
    </SurroundPortals>
  );
}
