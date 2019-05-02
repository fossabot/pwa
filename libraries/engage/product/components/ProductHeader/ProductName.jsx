import React from 'react';
import SurroundPortals from '@shopgate/pwa-common/components/SurroundPortals';
import { PRODUCT_NAME } from '@shopgate/pwa-common-commerce/product';
import PlaceholderLabel from '@shopgate/pwa-ui-shared/PlaceholderLabel';
import { useWidgetStyles } from '../../../core/hooks';
import { useProduct } from '../../hooks/useProduct';
import { ProductHeaderContext } from './ProductHeader.context';
import { productName } from './ProductHeader.styles';

/**
 * The product name.
 * @param {Object} props The component props.
 * @return {React.Node}
 */
export function ProductName() {
  const styles = useWidgetStyles(ProductHeaderContext);
  const { name } = useProduct();
  const style = {
    height: styles.name.fontSize * 1.25,
    marginTop: 5,
  };

  return (
    <SurroundPortals portalName={PRODUCT_NAME} portalProps={styles.name}>
      <div className={productName} style={styles.name} data-test-id={`name: ${name}`}>
        <PlaceholderLabel style={style} ready={name !== null}>
          {name}
        </PlaceholderLabel>
      </div>
    </SurroundPortals>
  );
};
