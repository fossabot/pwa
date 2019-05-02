import { useContext } from 'react';
import { logger } from '@shopgate/pwa-core';
import { ConfigContext } from '../config/ConfigContext';
import { useRoute } from './useRoute';

/**
 * Retrieves the configuration for a specific widget by its ID.
 * @param {string} widgetId The ID of the widget to look for.
 * @returns {Object}
 */
export function useWidgetConfig(widgetId) {
  const { pattern } = useRoute();
  const { pages } = useContext(ConfigContext);
  const page = pages.find(element => element.pattern === pattern);

  if (!page || !page.widgets) {
    logger.error(`A page config could not be found for: ${pattern}`);
    return {};
  }

  const widget = page.widgets.find(element => element.id === widgetId);

  if (!widget) {
    logger.error(`A widget config could not be found for: ${widgetId}`);
    return {};
  }

  const { name, id, ...config } = widget;

  return config;
}
