/* eslint-disable */

export default {
  'assets': {
    'logo': '<svg ...></svg>',
    'icons': {
      'magnifier': '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke- width="2" stroke - linecap="round" stroke - linejoin="round" class= "feather feather-search" > <circle cx="11" cy="11" r="8"></circle> <line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>',
    }
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
                'properties': {
                  color: 'blue',
                },
                'dimensions': {
                  'top': 1,
                  'left': 1,
                  'width': 2,
                  'height': 1
                }
              },
              {
                'name': 'ProductManufacturer',
                'properties': {
                  color: 'blue',
                },
                'dimensions': {
                  'top': 2,
                  'left': 1,
                  'width': 1,
                  'height': 1
                }
              },
              {
                'name': 'ProductShipping',
                'properties': {
                  color: 'blue',
                },
                'dimensions': {
                  'top': 3,
                  'left': 1,
                  'width': 1,
                  'height': 1
                }
              },
              {
                'name': 'ProductPrice',
                'properties': {
                  color: 'blue',
                },
                'dimensions': {
                  'top': 3,
                  'left': 2,
                  'width': 1,
                  'height': 1
                }
              },
              {
                'name': 'ProductMSRP',
                'properties': {
                  color: 'blue',
                },
                'dimensions': {
                  'top': 2,
                  'left': 2,
                  'width': 1,
                  'height': 1
                }
              },
              {
                'name': 'ProductStock',
                'properties': {
                  colors: {
                    ok: 'blue',
                    warning: 'purple',
                    error: 'pink',
                  },
                },
                'dimensions': {
                  'top': 4,
                  'left': 1,
                  'width': 1,
                  'height': 1
                }
              }
            ],
            'grid': {
              'columns': '1fr auto',
              'columnCount': 2,
              'columnGap': '0',
              'rows': 'min-content min-content min-content min-content',
              'rowCount': 4,
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
      'fontFamily': 'Roboto',
      'colorPrimary': 'hsla(20, 100%, 49%)',
      'colorAccent': 'hsla(189, 71%, 63%)'
    },
    'components': {
      'button': {},
      'headline': {},
      'textInput': {}
    }
  }
}