import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import PlaceholderLabel from '@shopgate/pwa-ui-shared/PlaceholderLabel';
import AvailableText from '@shopgate/pwa-ui-shared/Availability';
import Portal from '@shopgate/pwa-common/components/Portal';
import * as portals from '@shopgate/pwa-common-commerce/product/constants/Portals';
import connect from './connector';
import styles from './style';

/**
 * The StockInfo component.
 * @param {Object} props The component props.
 * @return {JSX}
 */
const StockInfo = ({ colors, stock }) => (
  <Fragment>
    <Portal name={portals.PRODUCT_STOCK_INFO_BEFORE} />
    <Portal name={portals.PRODUCT_STOCK_INFO}>
      <PlaceholderLabel className={styles.placeholder} ready={(stock !== null)}>
        {stock && (
          <AvailableText
            colors={colors}
            className={styles.availability}
            showWhenAvailable={false}
            text={stock.text}
            state={stock.state}
          />
        )}
      </PlaceholderLabel>
    </Portal>
    <Portal name={portals.PRODUCT_STOCK_INFO_AFTER} />
  </Fragment>
);

StockInfo.propTypes = {
  colors: PropTypes.shape(),
  stock: PropTypes.shape(),
};

StockInfo.defaultProps = {
  colors: {},
  stock: null,
};

export default connect(StockInfo);
