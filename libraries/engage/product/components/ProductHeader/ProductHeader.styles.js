import { css } from 'glamor';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';

const { spacing } = themeConfig;

export const wrapper = css({
  position: 'relative',
});

export const productName = css({
  fontWeight: 'bold',
  lineHeight: '1.15',
  marginBottom: spacing['1'],
  marginRight: (spacing['2'] * 9),
  wordBreak: ['keep-all', 'break-word'],
  hyphens: 'auto',
});

export const productRating = css({
  display: 'flex',
  alignItems: 'center',
});

export const productManufacturer = css({
  alignSelf: 'flex-end',
  fontWeight: 500,
  marginTop: -2,
});

export const ctasContainer = css({
  position: 'absolute',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
});

export const favoriteBtn = css({
  zIndex: 1, // Prevents the icons to be visible outside of the circle
}).toString();

export const ctasRipple = css({
  padding: 8,
}).toString();
