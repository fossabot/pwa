import { css } from 'glamor';
import { themeConfig } from '@shopgate/pwa-common/helpers/config';

const { font } = themeConfig;

const styles = {
  rootSize: 16,
  lineHeight: 1.5,
  ...font,
  family: 'var(--font-family)',
};

css.global('body', {
  font: `${styles.rootSize}px/${styles.lineHeight} ${styles.family}`,
});

export default styles;
