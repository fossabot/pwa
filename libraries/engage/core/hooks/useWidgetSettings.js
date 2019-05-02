import { useContext } from 'react';

/**
 * Retrieves the configuration for a specific widget by its ID.
 * @param {Object} context The context to get the styles from.
 * @returns {Object}
 */
export function useWidgetSettings(context) {
  const { settings = {} } = useContext(context);
  return settings;
}
