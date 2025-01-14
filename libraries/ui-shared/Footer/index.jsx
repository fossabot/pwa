import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Portal from '@shopgate/pwa-common/components/Portal';
import {
  APP_FOOTER_CONTENT_BEFORE,
  APP_FOOTER_CONTENT_AFTER,
} from '@shopgate/pwa-common/constants/Portals';
import { getStyle } from '@shopgate/pwa-common/helpers/dom';
import {
  footer,
  withInset,
  updateInsetBackgroundColor,
} from './style';

const APP_FOOTER_ID = 'AppFooter';
const DATA_IGNORED = 'data-footer-inset-update-ignore';

/**
 * The Footer Component
 */
class Footer extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: null,
  }

  /**
   * Sets up the DOM Mutation Observer to take care that the footer inset always has the correct
   * background color, which matches the background color of the last element within the footer.
   */
  componentDidMount() {
    this.performInsetBackgroundUpdate();

    const observer = new MutationObserver((mutations) => {
      const update = mutations
        .filter(mutation => mutation.target.getAttribute(DATA_IGNORED) !== 'true').length > 0;

      if (update) {
        this.performInsetBackgroundUpdate();
      }
    });

    observer.observe(this.ref.current, {
      attributes: true,
      childList: true,
      subtree: true,
    });
  }

  /**
   * Retrieves the background color for the footer inset.
   * @param {NodeList} elements The DOM elements to inspect.
   * @returns {string|null}
   */
  getInsetBackgroundColor(elements) {
    /**
     * The background color of the bottom inset needs to identical to the last entry of the footer.
     * So we loop backwards to the elements to find the first visible one.
     */
    const color = Array.from(elements).reverse().reduce((result, element) => {
      const ignore = element.getAttribute(DATA_IGNORED) === 'true';

      if (result || ignore) {
        // Nothing to do, since the color was already determined or the element can be ignored.
        return result;
      }

      if (element.id === APP_FOOTER_ID) {
        // Inspect core portal.
        return this.getInsetBackgroundColor(element.children);
      }

      if (element.clientHeight) {
        // Take the background color of the last visible element from the end of the footer.
        return getStyle(element, 'backgroundColor');
      }

      // Nothing happened within this loop - proceed with the next one.
      return result;
    }, null);

    if (color === 'rgba(0, 0, 0, 0)' || color === 'transparent') {
      return null;
    }

    return color || null;
  }

  /**
   * Performs an update of the inset background color.
   */
  performInsetBackgroundUpdate() {
    if (this.ref.current) {
      this.ref.current.classList.toggle(withInset, this.hasVisibleContent());

      updateInsetBackgroundColor(this.getInsetBackgroundColor(this.ref.current.children));
    }
  }

  /**
   * Checks if the footer has visible content.
   * @returns {boolean}
   */
  hasVisibleContent() {
    if (this.ref.current) {
      const elements = this.ref.current.parentElement
        .querySelectorAll(`footer > *:not(#${APP_FOOTER_ID}), #${APP_FOOTER_ID} > *`);

      return Array
        .from(elements)
        .filter(element =>
          element.getAttribute(DATA_IGNORED) !== 'true' && element.clientHeight > 0).length > 0;
    }

    return false;
  }

  ref = React.createRef();

  /**
   * @returns {JSX}
   */
  render() {
    return (
      <footer className={footer} ref={this.ref} >
        <Portal name={APP_FOOTER_CONTENT_BEFORE} />
        <div id={APP_FOOTER_ID}>
          {this.props.children}
        </div>
        <Portal name={APP_FOOTER_CONTENT_AFTER} />
      </footer>
    );
  }
}

export default Footer;
