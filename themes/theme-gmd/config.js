/* eslint-disable */

export default {
  'assets': {
    'logo': '<svg ...></svg>'
  },
  'content': {
    'globals': {},
    'pages': {
      '/item/:productId': {
        'grid': {
          'columns': '1fr',
          'columnCount': 1,
          'columnGap': '0',
          'rows': '1fr 1fr',
          'rowCount': 2,
          'rowGap': '0',
        },
        'children': [
          {
            'name': 'ProductImageSlider',
            "properties": {
              color: 'red',
            },
            'dimensions': {
              'top': 1,
              'left': 1,
              'width': 1,
              'height': 1
            },
          },
          {
            'name': 'ProductInfo',
            'children': [
              {
                'name': 'ProductTitle',
                'dimensions': {
                  'top': 1,
                  'left': 1,
                  'width': 2,
                  'height': 1
                }
              },
              {
                'name': 'ProductManufacturer',
                'dimensions': {
                  'top': 2,
                  'left': 1,
                  'width': 1,
                  'height': 1
                }
              },
              {
                'name': 'ProductShipping',
                'dimensions': {
                  'top': 3,
                  'left': 1,
                  'width': 1,
                  'height': 1
                }
              },
              {
                'name': 'ProductPrice',
                'dimensions': {
                  'top': 3,
                  'left': 2,
                  'width': 1,
                  'height': 1
                }
              },
              {
                'name': 'ProductMSRP',
                'dimensions': {
                  'top': 2,
                  'left': 2,
                  'width': 1,
                  'height': 1
                }
              }
            ],
            'grid': {
              'columns': '1fr auto',
              'columnCount': 2,
              'columnGap': '0',
              'rows': 'min-content min-content min-content',
              'rowCount': 3,
              'rowGap': '0',
            },
            'dimensions': {
              'top': 2,
              'left': 1,
              'width': 1,
              'height': 1
            }
          }
        ]
      }
    }
  },
  'settings': {
    'currency': 'EUR',
    'language': 'de_DE'
  },
  'styles': {
    'global': {
      'fontFamily': 'Arial',
      'colorPrimary': 'hsla( ... )',
      'colorAccent': 'hsla( ... )'
    },
    'components': {
      'button': {},
      'headline': {},
      'textInput': {}
    }
  }
}