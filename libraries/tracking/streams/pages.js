/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { routeDidChange$ } from '@shopgate/pwa-common/streams/history';
import { SEARCH_PATH } from '@shopgate/pwa-common-commerce/search/constants';
import { CATEGORY_PATH } from '@shopgate/pwa-common-commerce/category/constants';
import { ITEM_PATH } from '@shopgate/pwa-common-commerce/product/constants';
import { CHECKOUT_PATH } from '@shopgate/pwa-common/constants/RoutePaths';
import { FAVORITES_PATH } from '@shopgate/pwa-common-commerce/favorites/constants';

/**
 * A whitelist of routes that should be tracked with
 * exception to those that are handled individually.
 * @type {Array}
 */
const ignoredPaths = [
  SEARCH_PATH,
  CATEGORY_PATH,
  ITEM_PATH,
  CHECKOUT_PATH,
  FAVORITES_PATH,
];

/**
 * Emits when one of the tracked paths is entered except some special one.
 */
export const pagesAreReady$ = routeDidChange$.filter(({ pathname }) => (
  !ignoredPaths.some(path => pathname.startsWith(path))
));