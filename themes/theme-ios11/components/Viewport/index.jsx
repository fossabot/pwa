import React from 'react';
import PropTypes from 'prop-types';
import Navigator from 'Components/Navigator';
import TabBar from 'Components/TabBar';
import styles from './style';

/**
 * The viewport component.
 * @param {Object} props The component props.
 * @param {Object} context Context.
 * @returns {JSX}
 */
const Viewport = (props, context) => (
  <main
    className={styles}
    role="main"
    itemScope
    itemProp="http://schema.org/MobileApplication"
    lang={context.i18n().lang}
  >
    <Navigator />
    {props.children}
    <TabBar />
  </main>
);

Viewport.contextTypes = {
  i18n: PropTypes.func,
};

Viewport.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Viewport;
