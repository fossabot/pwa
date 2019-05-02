import React, { Fragment } from 'react';
import Portal from '@shopgate/pwa-common/components/Portal';
import {
  PRODUCT_HEADER,
  PRODUCT_HEADER_AFTER,
  PRODUCT_HEADER_BEFORE,
} from '@shopgate/pwa-common-commerce/product/constants/Portals';

import ProductHeaderContent from './components/Content';

import { ProductContext } from './../../context';

/**
 * The product header component.
 * @returns {JSX}
 */
function ProductHeader() {
  return (
    <Fragment>
      <Portal name={PRODUCT_HEADER_BEFORE} />
      <Portal name={PRODUCT_HEADER} >
        <ProductContext.Consumer>
          {props => <ProductHeaderContent {...props} />}
        </ProductContext.Consumer>
      </Portal>
      <Portal name={PRODUCT_HEADER_AFTER} />
    </Fragment>
  );
}

export default ProductHeader;
