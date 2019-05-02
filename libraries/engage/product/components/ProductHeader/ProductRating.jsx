import React from 'react';
import { PRODUCT_RATING } from '@shopgate/pwa-common-commerce/product';
import SurroundPortals from '@shopgate/pwa-common/components/SurroundPortals';
import RatingStars from '@shopgate/pwa-ui-shared/RatingStars';
import { useAppConfig, useWidgetStyles } from '../../../core/hooks';
import { useProduct } from '../../hooks/useProduct';
import { RatingCount } from '../../../reviews';
import { ProductHeaderContext } from './ProductHeader.context';
import { scrollToRating } from './helpers/scrollToRating';
import { productRating } from './ProductHeader.styles';

/**
 * The product rating.
 * @param {Object} props The component props.
 * @return {React.Node}
 */
export function ProductRating() {
  const { rating } = useProduct();
  const styles = useWidgetStyles(ProductHeaderContext);
  const { hasReviews } = useAppConfig();

  return (
    <SurroundPortals portalName={PRODUCT_RATING} portalProps={styles.rating}>
      {(hasReviews && rating && rating.count)
        ? (
          <div
            className={productRating}
            onClick={scrollToRating}
            style={styles.rating}
            role="link"
            aria-hidden
          >
            <RatingStars value={rating.average} display="big" />
            <RatingCount count={rating.count} prominent />
          </div>
        )
        : null}
    </SurroundPortals>
  );
}
