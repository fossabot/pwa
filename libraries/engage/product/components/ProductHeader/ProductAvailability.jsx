import React from 'react';
import { PRODUCT_AVAILABILITY } from '@shopgate/pwa-common-commerce/product';
import { SurroundPortals } from '@shopgate/pwa-common/components';
import PlaceholderLabel from '@shopgate/pwa-ui-shared/PlaceholderLabel';
import AvailableText from '@shopgate/pwa-ui-shared/Availability';
import { useProduct } from '../../hooks/useProduct';
import { useWidgetStyles } from '../../../core/hooks';
import { ProductHeaderContext } from './ProductHeader.context';

/**
 * The Availability component.
 * @param {Object} props The component props.
 * @return {React.Node}
 */
export function ProductAvailability() {
  const { availability } = useProduct();
  const styles = useWidgetStyles(ProductHeaderContext);

  return (
    <SurroundPortals portalName={PRODUCT_AVAILABILITY}>
      <PlaceholderLabel
        style={{
          height: 16,
          width: '70%',
          marginTop: 5,
          marginBottom: 2,
        }}
        ready={(availability !== null)}
      >
        {!!availability && (
          <AvailableText
            style={styles.availability}
            showWhenAvailable
            text={availability.text}
            state={availability.state}
          />
        )}
      </PlaceholderLabel>
    </SurroundPortals>
  );
};
