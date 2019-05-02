import React from 'react';
import PropTypes from 'prop-types';
import { css } from 'glamor';
import { SurroundPortals, I18n } from '@shopgate/pwa-common/components';
import { PRODUCT_PRICE_STRIKED } from '@shopgate/pwa-common-commerce/product/constants/Portals';
import PlaceholderLabel from '@shopgate/pwa-ui-shared/PlaceholderLabel';
import StrikePrice from '@shopgate/pwa-ui-shared/PriceStriked';
import { useWidgetStyles } from '../../../core/hooks';
import { ProductHeaderContext } from './ProductHeader.context';

/**
 * The PriceStriked component.
 * @param {Object} props The component props.
 * @return {React.Node}
 */
function PriceStrikedContainer({ price }) {
  const styles = useWidgetStyles(ProductHeaderContext);

  return (
    <SurroundPortals portalName={PRODUCT_PRICE_STRIKED}>
      <PlaceholderLabel
        style={{
          height: 16,
          width: '70%',
          marginTop: 5,
          marginBottom: 2,
        }}
        ready={(price !== null)}
      >
        {(price && price.msrp > 0 && price.unitPrice !== price.msrp) && (
          <React.Fragment>
            <I18n.Text string="price.msrp" className={css(styles.priceStriked.msrp)} />
            <StrikePrice
              className={styles.msrpStriked}
              value={price.msrp}
              currency={price.currency}
            />
          </React.Fragment>
        )}
        {(price && !price.msrp && price.unitPriceStriked > 0) && (
          <StrikePrice value={price.unitPriceStriked} currency={price.currency} />
        )}
      </PlaceholderLabel>
    </SurroundPortals>
  );
}

PriceStrikedContainer.propTypes = {
  price: PropTypes.shape(),
};

PriceStrikedContainer.defaultProps = {
  price: null,
};
