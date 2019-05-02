import React from 'react';
import PropTypes from 'prop-types';
import {
  AVAILABILITY_STATE_OK,
  AVAILABILITY_STATE_WARNING,
  AVAILABILITY_STATE_ALERT,
} from '@shopgate/pwa-common-commerce/product/constants';
import styles from './style';

/**
 * This component renders the availability text for a product
 * @param {Object} props The component props
 * @param {string} props.text The availability text
 * @param {string} props.state The state of the availability text
 * @param {boolean} [props.showWhenAvailable] Tells, if the component shall be rendered, when the
 *   state of the availability text is "ok"
 * @param {string} [props.className] CSS classes
 * @return {JSX}
 */
const Availability = ({
  text, state, showWhenAvailable = false, className = null, style,
}) => {
  if (!text || (state === AVAILABILITY_STATE_OK && !showWhenAvailable)) {
    return null;
  }

  let stateStyle = styles.stateOk;

  if (state === AVAILABILITY_STATE_WARNING) {
    stateStyle = styles.stateWarning;
  }

  if (state === AVAILABILITY_STATE_ALERT) {
    stateStyle = styles.stateAlert;
  }

  return (
    <div
      className={`${className} ${stateStyle}`}
      style={style}
      data-test-id={`availabilityText: ${text}`}
    >
      {text}
    </div>
  );
};

Availability.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  showWhenAvailable: PropTypes.bool,
  state: PropTypes.string,
  style: PropTypes.shape(),
};

Availability.defaultProps = {
  className: '',
  showWhenAvailable: false,
  state: AVAILABILITY_STATE_OK,
  style: null,
};

export default Availability;
