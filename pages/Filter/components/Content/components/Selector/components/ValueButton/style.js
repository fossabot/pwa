import { css } from 'glamor';
import colors from 'Styles/colors';

export const inactive = css({
  border: '1px solid #ebebeb',
  borderRadius: 2,
  color: 'inherit',
  height: 42,
  marginLeft: 8,
  marginBottom: 8,
  maxWidth: '100%',
  minWidth: 42,
  outline: 0,
  overflow: 'hidden',
  padding: '0 8px',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  transition: 'color 100ms cubic-bezier(0.25, 0.1, 0.25, 1), border-color 100ms cubic-bezier(0.25, 0.1, 0.25, 1)',
  willChange: 'color, border-color',
});

export const active = css(inactive, {
  borderColor: colors.accent,
  color: colors.accent,
});
