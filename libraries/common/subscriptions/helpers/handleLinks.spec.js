import { isShopLink, sanitizeLink } from './handleLinks';

jest.mock('@shopgate/pwa-common/helpers/config', () => ({
  shopCNAME: 'm.example.com',
}));

describe('handleLinks helpers', () => {
  describe('isShopLink()', () => {
    const positives = [
      'http://foo.shopgate.com',
      'https://foo.shopgate.com',
      'http://foo.shopgate.com/page/cms',
      'https://foo.shopgate.com/page/cms',
      'https://m.example.com',
      'http://m.example.com',
      'http://m.example.com/page/cms',
      'https://m.example.com/page/cms',
      'https://M.ExamPle.com/page/CMS',
    ];

    const negatives = [
      'https://example.com/bar',
      'https://example.com',
      'http://shopgate.com/foo',
      'https://shopgate.com/foo',
      'https://www.shopgate.com',
      'http://www.shopgate.com',
      'http://example.com',
      'https://example.com',
      'https://example.com/page/cms',
    ];

    positives.forEach((href) => {
      it(`should return true for ${href} link`, () => {
        expect(isShopLink(href)).toBe(true);
      });
    });

    negatives.forEach((href) => {
      it(`should return false for ${href} link`, () => {
        expect(isShopLink(href)).toBe(false);
      });
    });
  });

  describe('sanitizeLink()', () => {
    const links = [
      ['http://m.example.com/', 'http://m.example.com'],
      ['http://m.example.com', 'http://m.example.com'],
      ['https://m.example.com/page/cms/', 'https://m.example.com/page/cms'],
      ['https://m.example.com/page/cms', 'https://m.example.com/page/cms'],
      ['https://m.example.com/page/cms/?some=parameter', 'https://m.example.com/page/cms?some=parameter'],
      ['/page/title/', '/page/title'],
      ['/page/title', '/page/title'],
      ['tel:1234/', 'tel:1234'],
      ['tel:1234', 'tel:1234'],
      ['mailto:noreply@shopgate.com', 'mailto:noreply@shopgate.com'],
      ['shopgate://cart?coupon=test', '/cart?coupon=test'],
      ['app-12343://cart_add_coupon/test', '/cart_add_coupon/test'],
    ];

    it.each(links)(
      'should sanitize %s to %s',
      (input, output) => {
        expect(sanitizeLink(input)).toBe(output);
      }
    );
  });
});

