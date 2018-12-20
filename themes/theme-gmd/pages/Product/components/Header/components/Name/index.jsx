import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import pure from 'recompose/pure';
import PlaceholderLabel from '@shopgate/pwa-ui-shared/PlaceholderLabel';
import Portal from '@shopgate/pwa-common/components/Portal';
import { PRODUCT_NAME, PRODUCT_NAME_AFTER, PRODUCT_NAME_BEFORE } from '@shopgate/pwa-common-commerce/product/constants/Portals';
import connect from './connector';
import styles from './style';

/**
 * The Product Name component.
 * @param {Object} props The component props.
 * @return {JSX}
 */
const Name = ({ color, name }) => (
  <Fragment>
    <Portal name={PRODUCT_NAME_BEFORE} />
    <Portal name={PRODUCT_NAME}>
      <div className={styles.name} style={{ color }}>
        <PlaceholderLabel className={styles.placeholder} ready={(name !== null)}>
          <span data-test-id={`name: ${name}`}>
            {name}
          </span>
        </PlaceholderLabel>
      </div>
    </Portal>
    <Portal name={PRODUCT_NAME_AFTER} />
  </Fragment>
);

Name.propTypes = {
  color: PropTypes.string,
  name: PropTypes.string,
};

Name.defaultProps = {
  color: 'inherit',
  name: null,
};

export default connect(pure(Name));
