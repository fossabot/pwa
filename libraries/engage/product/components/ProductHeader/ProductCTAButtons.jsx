import React from 'react';
import {
  PRODUCT_CTAS,
  PRODUCT_CTAS_FAVORITES,
  PRODUCT_CTAS_ADD_TO_CART,
} from '@shopgate/pwa-common-commerce/product';
import { SurroundPortals } from '@shopgate/pwa-common/components';
import FavoritesButton from '@shopgate/pwa-ui-shared/FavoritesButton';
import { useWidgetStyles } from '../../../core/hooks';
import { useProduct } from '../../hooks/useProduct';
import { ctasContainer, favoriteBtn } from './ProductHeader.styles';

/**
 *
 */
export function ProductCTAButtons() {
  const styles = useWidgetStyles();
  const { id, isFavorited } = useProduct();

  return (
    <SurroundPortals portalName={PRODUCT_CTAS}>
      <div className={ctasContainer} style={styles.ctas.container}>
        <SurroundPortals portalName={PRODUCT_CTAS_FAVORITES}>
          <FavoritesButton
            className={favoriteBtn}
            rippleClassName={styles.ripple}
            active={isFavorited}
            productId={id}
          />
        </SurroundPortals>
      </div>
    </SurroundPortals>
  );
}
