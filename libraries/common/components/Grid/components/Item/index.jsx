import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { objectWithoutProps } from '../../../../helpers/data';
import styles from './style';

/**
 * The grid item component.
 */
class GridItem extends Component {
  static propTypes = {
    className: PropTypes.string,
    component: PropTypes.string,
    grow: PropTypes.number,
    shrink: PropTypes.number,
    // eslint-disable-next-line react/no-unused-prop-types
    style: PropTypes.shape(),
  };

  static defaultProps = {
    className: '',
    component: 'li',
    grow: 0,
    shrink: 1,
    style: null,
  };

  /**
   * Composes the props.
   * @returns {Object} The composed props.
   */
  getProps() {
    let { className } = this.props;

    if (this.props.grow !== 0) {
      className += ` ${styles.grow(this.props.grow)}`;
    }

    if (this.props.shrink !== 1) {
      className += ` ${styles.shrink(this.props.shrink)}`;
    }

    const props = {
      ...this.props,
      className,
    };

    return objectWithoutProps(props, [
      'component',
      'grow',
      'shrink',
    ]);
  }

  /**
   * Renders the component.
   * @returns {JSX}
   */
  render() {
    return React.createElement(this.props.component, this.getProps());
  }
}

export default GridItem;
