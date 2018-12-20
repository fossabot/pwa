import React, { PureComponent } from 'react';
import config from '../../../../../../config';
import { UIEvents } from '@shopgate/pwa-core';
import { AppBar } from '@shopgate/pwa-ui-material';
import { MagnifierIcon } from '@shopgate/pwa-ui-shared';
import { TOGGLE_SEARCH } from 'Components/Search/constants';

function icon() {
  return <div dangerouslySetInnerHTML={{ __html: config.assets.icons.magnifier }} />
}

/**
 * The SearchButton component.
 */
class SearchButton extends PureComponent {
  handleOnClick = () => {
    UIEvents.emit(TOGGLE_SEARCH, true);
  }

  /**
   * @returns {JSX}
   */
  render() {
    return (
      <AppBar.Icon icon={icon} onClick={this.handleOnClick} testId="SearchButton" />
    );
  }
}

export default SearchButton;
