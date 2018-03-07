/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ParsedLink from '@shopgate/pwa-common/components/Router/helpers/parsed-link';
import Portal from '@shopgate/pwa-common/components/Portal';
import { MORE_PATH } from 'Pages/More/constants';
import MoreIcon from 'Components/icons/MoreIcon';
import TabBarAction from '../TabBarAction';
import styles from './style';

/**
 * The tab bar home action.
 */
class TabBarMoreAction extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    ...TabBarAction.propTypes,
  };

  static defaultProps = TabBarAction.defaultProps;

  /**
   * Handles the click action.
   */
  handleClick = () => {
    if (this.props.path === MORE_PATH) {
      return;
    }

    const link = new ParsedLink(MORE_PATH);
    link.open();
  }

  /**
   * Renders the component.
   * @return {JSX}
   */
  render() {
    return (
      <TabBarAction
        {...this.props}
        icon={(
          <Portal name="tabbar.more-icon">
            <MoreIcon className={styles} />
          </Portal>
        )}
        onClick={this.handleClick}
      />
    );
  }
}

export default TabBarMoreAction;