import { useContext } from 'react';
import { ThemeContext } from '@shopgate/pwa-common/context';
import { ConfigContext } from '../config/ConfigContext';

/**
 * Provides the theme API. This does not include the contexts.
 * @returns {Object}
 */
export function useTheme() {
  const { pages, ...themeConfig } = useContext(ConfigContext);
  // The contexts are left out in favor of other hooks.
  const { contexts, ...themeContext } = useContext(ThemeContext);

  return {
    ...themeContext,
    ...themeConfig,
  };
}
