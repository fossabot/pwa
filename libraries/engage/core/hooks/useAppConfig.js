import appConfig from '@shopgate/pwa-common/helpers/config';

/**
 * Provides the application configuration.
 * @returns {Object}
 */
export function useAppConfig() {
  const { theme, ...rest } = appConfig;
  return rest;
}
