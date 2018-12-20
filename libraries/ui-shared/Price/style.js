import { css } from 'glamor';

const container = css({
  display: 'flex',
  position: 'relative',
  whiteSpace: 'nowrap',
}).toString();

const disclaimer = css({
  color: 'initial',
  fontSize: 14,
  position: 'absolute',
  right: -10,
  top: 0,
}).toString();

export default {
  container,
  disclaimer,
};
