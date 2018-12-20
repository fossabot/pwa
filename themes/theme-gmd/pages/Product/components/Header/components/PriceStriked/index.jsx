import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import Portal from '@shopgate/pwa-common/components/Portal';
import {
  PRODUCT_PRICE_STRIKED,
  PRODUCT_PRICE_STRIKED_AFTER,
  PRODUCT_PRICE_STRIKED_BEFORE,
} from '@shopgate/pwa-common-commerce/product/constants/Portals';
import I18n from '@shopgate/pwa-common/components/I18n';
import PlaceholderLabel from '@shopgate/pwa-ui-shared/PlaceholderLabel';
import StrikePrice from '@shopgate/pwa-ui-shared/PriceStriked';
import colors from 'Styles/colors';
import connect from './connector';
import styles from './style';

/**
 * The PriceStriked component.
 * @param {Object} props The component props.
 * @return {JSX}
 */
const PriceStriked = ({ color, price }) => (
  <Fragment>
    <Portal name={PRODUCT_PRICE_STRIKED_BEFORE} />
    <Portal name={PRODUCT_PRICE_STRIKED}>
      <PlaceholderLabel className={styles.placeholder} ready={(price !== null)}>
        {(price && price.msrp > 0 && price.unitPrice !== price.msrp) && (
          <Fragment>
            <span style={{ color }}>
              <I18n.Text string="price.msrp" className={styles.msrp} />
              <StrikePrice
                className={styles.msrpStriked}
                value={price.msrp}
                currency={price.currency}
              />
            </span>
          </Fragment>
        )}
        {(price && !price.msrp && price.unitPriceStriked > 0) && (
          <StrikePrice value={price.unitPriceStriked} currency={price.currency} />
        )}
      </PlaceholderLabel>
    </Portal>
    <Portal name={PRODUCT_PRICE_STRIKED_AFTER} />
  </Fragment>
);

PriceStriked.propTypes = {
  color: PropTypes.string,
  price: PropTypes.shape(),
};

PriceStriked.defaultProps = {
  color: colors.shade3,
  price: null,
};

export default connect(pure(PriceStriked));
