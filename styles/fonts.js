/**
 * Copyright (c) 2017-present, Shopgate, Inc. All rights reserved.
 *
 * This source code is licensed under the Apache 2.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */

import { css } from 'glamor';

const fonts = {
  family: 'Roboto, Arial, sans-serif',
  rootSize: 16,
  lineHeight: 1.5,
};

css.global('body', {
  font: `${fonts.rootSize}px/${fonts.lineHeight} ${fonts.family}`,
});

export default fonts;