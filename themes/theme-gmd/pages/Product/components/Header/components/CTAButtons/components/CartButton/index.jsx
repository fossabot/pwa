import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@shopgate/engage/core';
import { FloatingActionButton } from '@shopgate/pwa-ui-material';
import IndicatorCircle from '@shopgate/pwa-ui-shared/IndicatorCircle';
import Icon from './components/Icon';
import connect from './connector';
import inject from './injector';
import styles from './style';

/**
 * The CartButton component.
 * @param {Object} props The component props.
 * @returns {JSX}
 */
function CartButton(props) {
  const [clicked, setClicked] = useState(false);
  const { colors } = useTheme();
  const {
    addToCart,
    conditioner,
    disabled,
    loading,
    options,
    productId,
    background = colors.primary,
    backgroundClicked = colors.light,
    backgroundDisabled = colors.shade5,
  } = props;

  /**
   * @returns {string}
   */
  function getColor() {
    if (clicked) {
      return backgroundClicked;
    }

    return (disabled && !loading) ? backgroundDisabled : background;
  }

  /**
   * Handles the button click.
   * Checks if the button can be clicked and if
   * all criteria set by the conditioner are met.
   */
  function handleClick() {
    if (clicked || disabled) {
      return;
    }

    conditioner.check().then((fulfilled) => {
      if (!fulfilled) {
        return;
      }

      setClicked(true);
      addToCart({
        productId,
        options,
        quantity: 1,
      });
    });
  }

  /**
   * Reset the state to make the button clickable again.
   */
  function resetClicked() {
    setClicked(false);
  }

  return (
    <FloatingActionButton
      background={getColor()}
      className={styles}
      onClick={handleClick}
      testId="addToCartButton"
    >
      {loading
        ? <IndicatorCircle color={colors.primaryContrast} strokeWidth={4} paused={false} />
        : <Icon success={clicked} onSuccess={resetClicked} />
      }
    </FloatingActionButton>
  );
}

CartButton.propTypes = {
  addToCart: PropTypes.func.isRequired,
  conditioner: PropTypes.shape().isRequired,
  disabled: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  options: PropTypes.shape().isRequired,
  productId: PropTypes.string.isRequired,
};

export default inject(connect(CartButton));
