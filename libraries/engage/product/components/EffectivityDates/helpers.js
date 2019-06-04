import { isBefore, isAfter } from '@shopgate/engage/core';

const ALWAYS = 'always';
const DAYS_BEFORE = 'daysBefore';
const NEVER = 'always';

/**
 * Decide if startDate hint should be shown
 * @param {Object} settings settings
 * @param {Date} startDate product.startDate
 * @returns {boolean}
 */
export const showStartDateHint = (settings, startDate) => {
  if (!startDate || !startDate.getDate()) {
    return false;
  }

  const {
    startDate: {
      showProducts = ALWAYS, // 'always|daysBefore|never',
      daysBefore = 0,
    } = {},
  } = settings || {};

  switch (showProducts) {
    case ALWAYS:
      return isBefore(Date.now(), startDate);

    case DAYS_BEFORE: {
      const now = Date.now();
      return isBefore(now, startDate)
      && isAfter(startDate, now.setDate(now.getDate() - daysBefore));
    }

    default:
    case NEVER:
      return false;
  }
};

/**
 * Decide if endDate hint should be shown
 * @param {Object} settings settings
 * @param {Date} endDate product.endDate
 * @returns {boolean}
 */
export const showEndDateHint = (settings, endDate) => {
  if (!endDate || !endDate.getDate()) {
    return false;
  }

  const {
    endDate: {
      showProducts = ALWAYS, // 'always|daysBefore|never',
      daysBefore = 0,
    } = {},
  } = settings || {};

  switch (showProducts) {
    case ALWAYS:
      return true;

    case DAYS_BEFORE: {
      return isAfter(Date.now(), endDate.setDate(endDate.getDate() - daysBefore));
    }

    default:
    case NEVER:
      return false;
  }
};

