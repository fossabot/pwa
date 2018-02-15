/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getAbsoluteHeight } from '@shopgate/pwa-common/helpers/dom';
import connect from './connector';
import Layout from './components/Layout';

/**
 * The Coupon Field component.
 */
class CouponField extends Component {
  static propTypes = {
    addCoupon: PropTypes.func,
    isLoading: PropTypes.bool,
    onToggleFocus: PropTypes.func,
  };

  static defaultProps = {
    addCoupon: () => {},
    isLoading: false,
    onToggleFocus: () => {},
  };

  /**
   * Constructor.
   * @param {Object} props The components props.
   */
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
  }

  /**
   * Checks if the icon button should be visible.
   * @returns {boolean}
   */
  get isButtonVisible() {
    return (this.state.isFocused || this.state.value);
  }

  /**
   * Checks if the icon button should be disabled.
   * @returns {boolean}
   */
  get isButtonDisabled() {
    return (this.props.isLoading || !this.state.value.length);
  }

  /**
   * Adds a coupon to the cart.
   * @param {Object} event The click event object.
   */
  addCoupon = (event) => {
    event.preventDefault();

    if (!this.isButtonVisible) {
      return;
    }

    if (this.state.isFocused) {
      this.handleFocusChange(false);
    }

    this.props.addCoupon(this.state.value)
      .then(() => {
        this.setState({ value: '' });
      }).catch(() => {});
  }

  /**
   * Handle change inside the input field
   * @param {Object} value The value inside the field
   */
  handleValueChange = (value) => {
    this.setState({
      value,
    });
  }

  /**
   * Internal focus event handler.
   * @param {boolean} isFocused Whether the input component is focused.
   */
  handleFocusChange = (isFocused) => {
    if (isFocused) {
      /**
       * When the user focuses the coupon input, the keyboard will pop up an overlap the input.
       * Therefore the input has to be scrolled into the viewport again. Since between the focus and
       * the keyboard apearance some time ticks away, the execution of the scroll code is delayed.
       */
      setTimeout(() => {
        const yOffset = -(window.innerHeight / 2) + getAbsoluteHeight(this.element);

        this.element.scrollIntoView({
          behavior: 'smooth',
          yOffset,
        });
      }, 600);
    }

    this.setState({
      isFocused,
    });

    this.props.onToggleFocus(isFocused);
  };

  /**
   * Renders the component.
   * @returns {JSX}
   */
  render() {
    const labelStyle = { display: this.state.value ? 'none' : 'block' };
    const iconStyle = {
      opacity: (this.isButtonVisible) ? 1 : 0,
    };

    return (
      <div ref={(element) => { this.element = element; }}>
        <Layout
          handleAddCoupon={this.addCoupon}
          isFocused={this.state.isFocused}
          isLoading={this.props.isLoading}
          isButtonDisabled={this.isButtonDisabled}
          handleFocusChange={this.handleFocusChange}
          handleValueChange={this.handleValueChange}
          labelStyle={labelStyle}
          iconStyle={iconStyle}
          value={this.state.value}
        />
      </div>
    );
  }
}

export default connect(CouponField);
