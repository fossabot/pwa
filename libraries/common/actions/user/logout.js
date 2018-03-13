/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import PipelineRequest from '@shopgate/pwa-core/classes/PipelineRequest';
import { logger } from '@shopgate/pwa-core/helpers';
import {
  requestLogout,
  successLogout,
  errorLogout,
} from '../../action-creators/user';

/**
 * Logout the current user.
 * @return {Function} A redux thunk.
 */
export default () => (dispatch) => {
  dispatch(requestLogout());

  new PipelineRequest('logout')
    .setTrusted()
    .dispatch()
    .then(({ success, messages }) => {
      if (success) {
        dispatch(successLogout());
      } else {
        dispatch(errorLogout(messages));
      }
    })
    .catch((error) => {
      logger.error(error);
      dispatch(errorLogout());
    });
};