/**
 *  Copyright (c) 2018, Shopgate, Inc. All rights reserved.
 *
 *  This source code is licensed under the Apache 2.0 license found in the
 *  LICENSE file in the root directory of this source tree.
 *
 */

import { css } from 'glamor';
import variables from 'Styles/variables';

const drawer = css({
  width: '100%',
  background: 'black',
  padding: variables.gap.big,
}).toString();

export default {
  drawer,
};