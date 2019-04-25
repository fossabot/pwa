import {
  ERROR_FETCH_FAVORITES,
  RECEIVE_FAVORITES,
  REQUEST_FAVORITES,
  REQUEST_ADD_FAVORITES,
  REQUEST_REMOVE_FAVORITES,
  REQUEST_SYNC_FAVORITES,
  RECEIVE_SYNC_FAVORITES,
  ERROR_SYNC_FAVORITES,
  IDLE_SYNC_FAVORITES,
  ERROR_FAVORITES,
} from '../constants';

/**
 * Error on fetch favorites action.
 * @param {Error} error Error.
 * @returns {Object}
 */
export const errorFetchFavorites = error => ({
  type: ERROR_FETCH_FAVORITES,
  error,
});

/**
 * Error on favorites action.
 * @param {string} productId Product identifier.
 * @param {Error} error Error.
 * @returns {Object}
 */
export const errorFavorites = (productId, error) => ({
  type: ERROR_FAVORITES,
  productId,
  error,
});

/**
 * Request add favorites action.
 * @param {string} productId Product identifier.
 * @returns {Object}
 */
export const requestAddFavorites = productId => ({
  type: REQUEST_ADD_FAVORITES,
  productId,
});

/**
 * Request remove favorites action.
 * @param {string} productId Product identifier.
 * @param {boolean} silent silent
 * @returns {Object}
 */
export const requestRemoveFavorites = (productId, silent = false) => ({
  type: REQUEST_REMOVE_FAVORITES,
  productId,
  silent,
});

/**
 * Receive favorites action.
 * @param {Array} products Products.
 * @param {number} requestTimestamp Time when request was inited (ms).
 * @returns {Object}
 */
export const receiveFavorites = (products, requestTimestamp) => ({
  type: RECEIVE_FAVORITES,
  products,
  requestTimestamp,
});

/**
 * Request favorites action.
 * @returns {Object}
 */
export const requestFavorites = () => ({
  type: REQUEST_FAVORITES,
});
/**
 * Request sync action.
 * @returns {Object}
 */
export const requestSyncFavorites = () => ({
  type: REQUEST_SYNC_FAVORITES,
});
/**
 * Receive sync action.
 * @returns {Object}
 */
export const receiveSyncFavorites = () => ({
  type: RECEIVE_SYNC_FAVORITES,
});
/**
 * Error sync action.
 * @returns {Object}
 */
export const errorSyncFavorites = () => ({
  type: ERROR_SYNC_FAVORITES,
});
/**
 * Idle sync action.
 * @returns {Object}
 */
export const idleSyncFavorites = () => ({
  type: IDLE_SYNC_FAVORITES,
});
