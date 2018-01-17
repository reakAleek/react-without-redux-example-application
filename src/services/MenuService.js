import { Observable } from 'rxjs'


const mockMenus =
[
    {
      'from_date': '2018-01-15',
      'to_date': '2018-01-15',
      'restaurant_definition': {
        'restaurant_name': 'Saturn Lounge',
        'restaurant_key': 'aaa1dd93-cbd8-4399-8aa0-1737fadb3519',
        'provider_class_name': 'malsato.menu.provider.saturn_provider.SaturnMenuProvider',
        'location': {
          'lat': 48.23635,
          'lng': 16.41314
        },
        'contact': {
          'address': {
            'street': 'Leonard-Bernstein-Straße 10',
            'postal_code': '1220',
            'city': 'Wien'
          },
          'phone': '+43 1 269 89 73-3003',
          'email': 'dunajova@m-eventcatering.at'
        },
        'open_hours': [
          {
            'days_string': 'Mo-Do',
            'from': '8:00',
            'to': '19:00'
          },
          {
            'days_string': 'Fr',
            'from': '8:00',
            'to': '18:00'
          }
        ],
        'menu_times': [
          {
            'days_string': '',
            'from': '11:30',
            'to': '14:30'
          }
        ],
        'known_email_addresses': []
      },
      'dishes': [
        {
          'name': 'Suppe',
          'additional_info': [
            'Karottencremesuppe',
            'Curry'
          ],
          'price': '€ 1,80',
          'allergens': [
            {
              'abbr': 'A'
            },
            {
              'abbr': 'F'
            },
            {
              'abbr': 'G'
            }
          ],
          'hot': 0,
          'is_veggie': false
        },
        {
          'name': 'Tagesteller vegetarisch',
          'additional_info': [
            'Erdäpfel-Kürbisstrudel',
            'Kräuterrahm'
          ],
          'price': '€ 4,90',
          'allergens': [
            {
              'abbr': 'A'
            },
            {
              'abbr': 'C'
            },
            {
              'abbr': 'G'
            }
          ],
          'hot': 0,
          'is_veggie': true
        },
        {
          'name': 'Tagesteller',
          'additional_info': [
            'Putennaturschnitzel gefüllt',
            'mit Spinat und Feta Käse',
            'Peperonatasauce',
            'Butterspätzle'
          ],
          'price': '€ 5,90',
          'allergens': [
            {
              'abbr': 'A'
            },
            {
              'abbr': 'C'
            },
            {
              'abbr': 'F'
            },
            {
              'abbr': 'G'
            }
          ],
          'hot': 0,
          'is_veggie': false
        },
        {
          'name': 'Tagesempfehlung',
          'additional_info': [
            'Knusprige Ente',
            'gebratener Eierreis',
            'Wokgemüse'
          ],
          'price': '€ 8,50',
          'allergens': [
            {
              'abbr': 'A'
            },
            {
              'abbr': 'B'
            },
            {
              'abbr': 'C'
            },
            {
              'abbr': 'D'
            },
            {
              'abbr': 'F'
            },
            {
              'abbr': 'G'
            },
            {
              'abbr': 'L'
            },
            {
              'abbr': 'N'
            },
            {
              'abbr': 'R'
            }
          ],
          'hot': 0,
          'is_veggie': false
        },
        {
          'name': 'Aus unserer Patisserie',
          'additional_info': [
            'Vanillepudding',
            'Schlagobers'
          ],
          'price': '€ 1,80',
          'allergens': [
            {
              'abbr': 'G'
            }
          ],
          'hot': 0,
          'is_veggie': false
        }
      ],
      'is_favourite': false
    },
    {
      'from_date': '2018-01-16',
      'to_date': '2018-01-16',
      'restaurant_definition': {
        'restaurant_name': 'Saturn Lounge',
        'restaurant_key': 'aaa1dd93-cbd8-4399-8aa0-1737fadb3519',
        'provider_class_name': 'malsato.menu.provider.saturn_provider.SaturnMenuProvider',
        'location': {
          'lat': 48.23635,
          'lng': 16.41314
        },
        'contact': {
          'address': {
            'street': 'Leonard-Bernstein-Straße 10',
            'postal_code': '1220',
            'city': 'Wien'
          },
          'phone': '+43 1 269 89 73-3003',
          'email': 'dunajova@m-eventcatering.at'
        },
        'open_hours': [
          {
            'days_string': 'Mo-Do',
            'from': '8:00',
            'to': '19:00'
          },
          {
            'days_string': 'Fr',
            'from': '8:00',
            'to': '18:00'
          }
        ],
        'menu_times': [
          {
            'days_string': '',
            'from': '11:30',
            'to': '14:30'
          }
        ],
        'known_email_addresses': []
      },
      'dishes': [
        {
          'name': 'Suppe',
          'additional_info': [
            'Französische Zwiebelsuppe',
            'Käsecroutons',
            ''
          ],
          'price': '€ 1,80',
          'allergens': [
            {
              'abbr': 'A'
            },
            {
              'abbr': 'G'
            },
            {
              'abbr': 'L'
            },
            {
              'abbr': 'O'
            }
          ],
          'hot': 0,
          'is_veggie': false
        },
        {
          'name': 'Tagesteller vegetarisch',
          'additional_info': [
            'Quinoa-Gemüsepfanne',
            'frischer Koriander'
          ],
          'price': '€ 4,90',
          'allergens': [
            {
              'abbr': 'A'
            }
          ],
          'hot': 0,
          'is_veggie': true
        },
        {
          'name': 'Tagesteller',
          'additional_info': [
            'Schinkenrahmfleckerl',
            'bunte Blattsalate',
            'Joghurtdressing'
          ],
          'price': '€ 5,90',
          'allergens': [
            {
              'abbr': 'A'
            },
            {
              'abbr': 'C'
            },
            {
              'abbr': 'G'
            },
            {
              'abbr': 'M'
            }
          ],
          'hot': 0,
          'is_veggie': false
        },
        {
          'name': 'Tagesempfehlung',
          'additional_info': [
            'Gegrilltes Rinderhüftsteak',
            'Rucolarisotto',
            'Pinienkerne'
          ],
          'price': '€ 8,50',
          'allergens': [
            {
              'abbr': 'G'
            },
            {
              'abbr': 'O'
            }
          ],
          'hot': 0,
          'is_veggie': false
        },
        {
          'name': 'Aus unserer Patisserie',
          'additional_info': [
            'Topfencreme',
            'Waldbeeren'
          ],
          'price': '€ 1,80',
          'allergens': [
            {
              'abbr': 'G'
            }
          ],
          'hot': 0,
          'is_veggie': false
        }
      ],
      'is_favourite': false
    },
    {
      'from_date': '2018-01-17',
      'to_date': '2018-01-17',
      'restaurant_definition': {
        'restaurant_name': 'Saturn Lounge',
        'restaurant_key': 'aaa1dd93-cbd8-4399-8aa0-1737fadb3519',
        'provider_class_name': 'malsato.menu.provider.saturn_provider.SaturnMenuProvider',
        'location': {
          'lat': 48.23635,
          'lng': 16.41314
        },
        'contact': {
          'address': {
            'street': 'Leonard-Bernstein-Straße 10',
            'postal_code': '1220',
            'city': 'Wien'
          },
          'phone': '+43 1 269 89 73-3003',
          'email': 'dunajova@m-eventcatering.at'
        },
        'open_hours': [
          {
            'days_string': 'Mo-Do',
            'from': '8:00',
            'to': '19:00'
          },
          {
            'days_string': 'Fr',
            'from': '8:00',
            'to': '18:00'
          }
        ],
        'menu_times': [
          {
            'days_string': '',
            'from': '11:30',
            'to': '14:30'
          }
        ],
        'known_email_addresses': []
      },
      'dishes': [
        {
          'name': 'Suppe',
          'additional_info': [
            'Zucchinicremesuppe',
            'frische Kresse'
          ],
          'price': '€ 1,80',
          'allergens': [
            {
              'abbr': 'A'
            },
            {
              'abbr': 'F'
            },
            {
              'abbr': 'G'
            }
          ],
          'hot': 0,
          'is_veggie': false
        },
        {
          'name': 'Tagesteller vegetarisch',
          'additional_info': [
            'Goldbraunes Gemüsegratin',
            '',
            'Schnittlauchsauce'
          ],
          'price': '€ 4,90',
          'allergens': [
            {
              'abbr': 'G'
            }
          ],
          'hot': 0,
          'is_veggie': true
        },
        {
          'name': 'Tagesteller',
          'additional_info': [
            'Waldviertler Grillhenderl',
            'Natursaft',
            'Risi Pisi'
          ],
          'price': '€ 5,90',
          'allergens': [
            {
              'abbr': 'A'
            },
            {
              'abbr': 'G'
            }
          ],
          'hot': 0,
          'is_veggie': false
        },
        {
          'name': 'Tagesempfehlung',
          'additional_info': [
            'Gebratene',
            'Schweinsmedaillons',
            'Pfeffersauce',
            'Erdäpfelpüree'
          ],
          'price': '€ 8,50',
          'allergens': [
            {
              'abbr': 'A'
            },
            {
              'abbr': 'F'
            },
            {
              'abbr': 'G'
            },
            {
              'abbr': 'O'
            }
          ],
          'hot': 0,
          'is_veggie': false
        },
        {
          'name': 'Aus unserer Patisserie',
          'additional_info': [
            'Panna Cotta',
            'Himbeerpüree'
          ],
          'price': '€ 1,80',
          'allergens': [
            {
              'abbr': 'G'
            }
          ],
          'hot': 0,
          'is_veggie': false
        }
      ],
      'is_favourite': false
    },
    {
      'from_date': '2018-01-18',
      'to_date': '2018-01-18',
      'restaurant_definition': {
        'restaurant_name': 'Saturn Lounge',
        'restaurant_key': 'aaa1dd93-cbd8-4399-8aa0-1737fadb3519',
        'provider_class_name': 'malsato.menu.provider.saturn_provider.SaturnMenuProvider',
        'location': {
          'lat': 48.23635,
          'lng': 16.41314
        },
        'contact': {
          'address': {
            'street': 'Leonard-Bernstein-Straße 10',
            'postal_code': '1220',
            'city': 'Wien'
          },
          'phone': '+43 1 269 89 73-3003',
          'email': 'dunajova@m-eventcatering.at'
        },
        'open_hours': [
          {
            'days_string': 'Mo-Do',
            'from': '8:00',
            'to': '19:00'
          },
          {
            'days_string': 'Fr',
            'from': '8:00',
            'to': '18:00'
          }
        ],
        'menu_times': [
          {
            'days_string': '',
            'from': '11:30',
            'to': '14:30'
          }
        ],
        'known_email_addresses': []
      },
      'dishes': [
        {
          'name': 'Suppe',
          'additional_info': [
            'Rindsbouillon',
            'Frittaten'
          ],
          'price': '€ 1,80',
          'allergens': [
            {
              'abbr': 'A'
            },
            {
              'abbr': 'C'
            },
            {
              'abbr': 'G'
            },
            {
              'abbr': 'L'
            }
          ],
          'hot': 0,
          'is_veggie': false
        },
        {
          'name': 'Tagesteller vegetarisch',
          'additional_info': [
            'Cous Cous Gemüselaibchen',
            '',
            'Mangold a la creme'
          ],
          'price': '€ 4,90',
          'allergens': [
            {
              'abbr': 'A'
            },
            {
              'abbr': 'F'
            },
            {
              'abbr': 'G'
            }
          ],
          'hot': 0,
          'is_veggie': true
        },
        {
          'name': 'Tagesteller',
          'additional_info': [
            'gekochter Tafelspitz',
            'Rösterdäpfel',
            'Cremespinat'
          ],
          'price': '€ 5,90',
          'allergens': [
            {
              'abbr': 'A'
            },
            {
              'abbr': 'G'
            }
          ],
          'hot': 0,
          'is_veggie': false
        },
        {
          'name': 'Tagesempfehlung',
          'additional_info': [
            'gebratenes Kalbskotelette',
            'Zwiebel Speck Sauce',
            'Wildreis'
          ],
          'price': '€ 8,50',
          'allergens': [
            {
              'abbr': 'A'
            },
            {
              'abbr': 'F'
            },
            {
              'abbr': 'G'
            }
          ],
          'hot': 0,
          'is_veggie': false
        },
        {
          'name': 'Aus unserer Patisserie',
          'additional_info': [
            'Maronipüree',
            'Schlagobers',
            'Schokoladensauce'
          ],
          'price': '€ 1,80',
          'allergens': [
            {
              'abbr': 'G'
            }
          ],
          'hot': 0,
          'is_veggie': false
        }
      ],
      'is_favourite': false
    },
    {
      'from_date': '2018-01-19',
      'to_date': '2018-01-19',
      'restaurant_definition': {
        'restaurant_name': 'Saturn Lounge',
        'restaurant_key': 'aaa1dd93-cbd8-4399-8aa0-1737fadb3519',
        'provider_class_name': 'malsato.menu.provider.saturn_provider.SaturnMenuProvider',
        'location': {
          'lat': 48.23635,
          'lng': 16.41314
        },
        'contact': {
          'address': {
            'street': 'Leonard-Bernstein-Straße 10',
            'postal_code': '1220',
            'city': 'Wien'
          },
          'phone': '+43 1 269 89 73-3003',
          'email': 'dunajova@m-eventcatering.at'
        },
        'open_hours': [
          {
            'days_string': 'Mo-Do',
            'from': '8:00',
            'to': '19:00'
          },
          {
            'days_string': 'Fr',
            'from': '8:00',
            'to': '18:00'
          }
        ],
        'menu_times': [
          {
            'days_string': '',
            'from': '11:30',
            'to': '14:30'
          }
        ],
        'known_email_addresses': []
      },
      'dishes': [
        {
          'name': 'Suppe',
          'additional_info': [
            'Erdäpfelcremesuppe',
            'Lauchringe'
          ],
          'price': '€ 1,80',
          'allergens': [
            {
              'abbr': 'A'
            },
            {
              'abbr': 'F'
            },
            {
              'abbr': 'G'
            }
          ],
          'hot': 0,
          'is_veggie': false
        },
        {
          'name': 'Tagesteller vegetarisch',
          'additional_info': [
            'Marillenpalatschinken',
            'Staubzucker'
          ],
          'price': '€ 4,90',
          'allergens': [
            {
              'abbr': 'A'
            },
            {
              'abbr': 'C'
            },
            {
              'abbr': 'G'
            }
          ],
          'hot': 0,
          'is_veggie': true
        },
        {
          'name': 'Tagesteller',
          'additional_info': [
            'Gegrilltes Lachsforellenfilet',
            '',
            'cremiger Blattspinat',
            'Petersilerdäpfel'
          ],
          'price': '€ 5,90',
          'allergens': [
            {
              'abbr': 'A'
            },
            {
              'abbr': 'D'
            },
            {
              'abbr': 'F'
            },
            {
              'abbr': 'G'
            }
          ],
          'hot': 0,
          'is_veggie': false
        },
        {
          'name': 'Tagesempfehlung',
          'additional_info': [
            'Rinderfilet \'Stroganoff\'',
            '',
            'Serviettenknödel'
          ],
          'price': '€ 8,50',
          'allergens': [
            {
              'abbr': 'A'
            },
            {
              'abbr': 'C'
            },
            {
              'abbr': 'F'
            },
            {
              'abbr': 'G'
            },
            {
              'abbr': 'L'
            },
            {
              'abbr': 'M'
            }
          ],
          'hot': 0,
          'is_veggie': false
        },
        {
          'name': 'Aus unserer Patisserie',
          'additional_info': [
            'Fruchtsalat'
          ],
          'price': '€ 1,80',
          'allergens': [],
          'hot': 0,
          'is_veggie': false
        }
      ],
      'is_favourite': false
    }
  ];



 export const getMenus = () => Observable.of(mockMenus);
