import { css } from 'glamor';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';

const { colors, variables } = themeConfig;

const wrapper = css({
  background: colors.light,
  boxShadow: '0 -4px 5px -2px rgba(0, 0, 0, 0.1)',
  position: 'relative',
  zIndex: 2,
}).toString();

const container = css({
  padding: variables.gap.big,
  paddingBottom: 0,
  lineHeight: 1.45,
  flexWrap: 'wrap',
  flexDirection: 'column',
  minWidth: 'auto',
}).toString();

const checkoutButton = css({
  display: 'flex',
  justifyContent: 'flex-end',
}).toString();

const checkoutButtonContainer = css({
  background: colors.light,
  alignItems: 'center',
  padding: variables.gap.big,
  position: 'relative',
  zIndex: 2,
}).toString();

export default {
  wrapper,
  container,
  checkoutButton,
  checkoutButtonContainer,
};
