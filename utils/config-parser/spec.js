const JSONConfig = require('./index');

describe('Utils', () => {
  describe('config-parser', () => {
    it('should replace a value within some object property inside object', () => {
      const config = {
        global: {
          foo: 'bar',
          baz: 'faz',
        },
        someOther: [
          {
            test: '1234',
            test2: '$.global.foo',
          },
        ],
      };
      const expected = {
        global: {
          foo: 'bar',
          baz: 'faz',
        },
        someOther: [
          {
            test: '1234',
            test2: 'bar',
          },
        ],
      };

      const result = new JSONConfig(config).parse();
      expect(result).toMatchObject(expected);
      expect(result).toMatchSnapshot();
    });

    it('should replace a value within some array value', () => {
      const config = {
        global: {
          foo: 'bar',
          baz: 'faz',
        },
        content: [
          '$.global.foo',
          '$.global.baz',
        ],
      };
      const expected = {
        global: {
          foo: 'bar',
          baz: 'faz',
        },
        content: [
          'bar',
          'faz',
        ],
      };

      const result = new JSONConfig(config).parse();
      expect(result).toMatchObject(expected);
      expect(result).toMatchSnapshot();
    });

    it('should not change numbers', () => {
      const config = {
        someNumber: 4,
        someArray: [
          5,
        ],
      };

      const expected = {
        someNumber: 4,
        someArray: [
          5,
        ],
      };

      const result = new JSONConfig(config).parse();
      expect(result).toMatchObject(expected);
      expect(result).toMatchSnapshot();
    });

    it('should not change arrays', () => {
      const config = {
        someNumber: 4,
        someArray: [
          [
            6,
            '$.someNumber',
          ],
        ],
      };

      const expected = {
        someNumber: 4,
        someArray: [
          [
            6,
            4,
          ],
        ],
      };

      const result = new JSONConfig(config).parse();
      expect(result).toMatchObject(expected);
      expect(result).toMatchSnapshot();
    });

    it('should return empty object if no config is set', () => {
      const result = new JSONConfig().parse();
      expect(result).toMatchObject({});
      expect(result).toMatchSnapshot();
    });
  });
});
