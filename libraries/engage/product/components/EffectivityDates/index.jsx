import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { css } from 'glamor';
import { isBeta, useWidgetSettings, useWidgetStyles } from '@shopgate/engage/core';
import { I18n, TimeBoundary } from '@shopgate/engage/components';
import { showStartDateHint, showEndDateHint } from './helpers';
import { hint } from './style';
import connect from './connector';

/**
 * The Product Effectivity Dates component.
 * @return {JSX}
 */
const EffectivityDates = ({
  dates, children, productNotAvailable, navigateOnExpire,
}) => {
  if (!isBeta() || !dates) {
    return children;
  }

  const settings = useWidgetSettings('@shopgate/engage/product/EffectivityDates');
  const styles = useWidgetStyles('@shopgate/engage/product/EffectivityDates');

  const startDate = new Date(dates.startDate);
  const endDate = new Date(dates.endDate);

  const hintAddClass = styles && styles.hint ? css(styles.hint).toString() : null;
  const hintClass = classNames(hint, hintAddClass);

  return (
    <TimeBoundary start={startDate} end={endDate}>
      {({ before, between, after }) => {
        if (before) {
          return showStartDateHint(settings, startDate)
            ? <I18n.Text string="product.available.at" params={{ startDate }} className={hintClass} />
            : children;
        }

        if (between) {
          return (
            <Fragment>
              {children}
              {showEndDateHint(settings, endDate) &&
                <I18n.Text string="product.available.until" params={{ endDate }} className={hintClass} />
              }
            </Fragment>
          );
        }

        if (after) {
          if (navigateOnExpire && !settings.accessExpired) {
            productNotAvailable();
          }

          return showEndDateHint(settings, endDate)
            ? <I18n.Text string="product.available.not" className={hintClass} />
            : children;
        }
        return children;
      }}
    </TimeBoundary>
  );
};

EffectivityDates.propTypes = {
  productNotAvailable: PropTypes.func.isRequired,
  children: PropTypes.element,
  dates: PropTypes.shape({
    startDate: PropTypes.string.isRequired,
    endDate: PropTypes.string.isRequired,
  }),
  navigateOnExpire: PropTypes.bool,
};

EffectivityDates.defaultProps = {
  navigateOnExpire: false,
  children: null,
  dates: null,
};

export default connect(EffectivityDates);
