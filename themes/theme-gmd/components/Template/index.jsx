import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

/**
 * The Template component.
 */
class Template extends Component {
  static propTypes = {
    config: PropTypes.arrayOf(PropTypes.string).isRequired,
    name: PropTypes.string.isRequired,
    slots: PropTypes.shape().isRequired,
  }

  /**
   * @returns {JSX}
   */
  render() {
    const { config, slots } = this.props;
    return (
      <Fragment>
        {config.map((entry) => {
          const { [entry]: Slot } = slots;

          if (!Slot) {
            return null;
          }

          return <Fragment key={entry}>{Slot}</Fragment>;
        })}
      </Fragment>
    );
  }
}

export default Template;
