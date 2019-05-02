import { useContext } from 'react';

/**
 * Retrieves the configuration for a specific widget by its ID.
 * @param {Object} context The context to get the styles from.
 * @returns {Object}
 */
export function useWidgetStyles(context) {
  const { styles = {} } = useContext(context);
  return styles;
}
