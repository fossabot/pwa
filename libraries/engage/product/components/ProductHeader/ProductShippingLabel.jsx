import React from 'react';
import PropTypes from 'prop-types';
import I18n from '@shopgate/pwa-common/components/I18n';
import { useWidgetStyles } from '../../../core/hooks';
import { ProductHeaderContext } from './ProductHeader.context';

/**
 * The Shipping Label component.
 * @param {Object} props The component props.
 * @returns {JSX}
 */
export function ProductShippingLabel({ price, currency }) {
  const styles = useWidgetStyles(ProductHeaderContext);

  return (
    <div style={styles.shipping}>
      {(price > 0)
        ? (
          <I18n.Text string="shipping.cost">
            <I18n.Price forKey="price" price={price} currency={currency} />
          </I18n.Text>
        )
        : (
          <I18n.Text string="shipping.free" />
        )}
    </div>
  );
}

ProductShippingLabel.propTypes = {
  currency: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};
