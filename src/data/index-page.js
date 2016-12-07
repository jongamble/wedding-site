import invitationNames from './invitation-names';

const indexData = {
    'header': {
        'location': 'Banchory, Scotland',
        'date': 'July 12, 2017',
        'leftName': 'Jonathan Gamble',
        'rightName': 'Kathleen McKee',
        'image': 'raemoir-watercolor.png'
    },
    'about': {
        'bride': {
            'headline': '',
            'copy': '',
            'image': ''
        },
        'groom': {
            'headline': '',
            'copy': '',
            'image': ''
        },
        'couple': {
            'headline': '',
            'copy': '',
            'image': 'engagement1.jpg'
        }
    },
    'travel': [
        {
            'headline': 'Arrival by Air',
            'copy': 'There are a few airports, somewhat locally, that you can fly into - Aberdeen airport and Edinburgh airport. For those around RDU, it looks like most flights go through London Heathrow (LHR) or Boston and Dublin.'
        },
        {
            'headline': 'Arrival by Train',
            'copy': 'For those wanting to fly into a larger airport farther from Aberdeen, the rail system is a great opportunity to see the country and get closer to the venue. The closest train stations to the venue are Stonehaven & Aberdeen.'
        },
        {
            'headline': 'Accommodations',
            'copy': 'We are in the final stages of preparing a plan for all accommodations for the guests for the 2 days in Banchory. Most of the guests will be staying at the Raemoir House Hotel, while a few will stay at the nearby Banchory Lodge Hotel or Tor-Na-Coille Country House Hotel.'
        }
    ],
    'events': [
        {
            'headline': 'Travel 1',
            'copy': 'This is travel 1 copyThis is travel 1 copyThis is travel 1 copyThis is travel 1 copyThis is travel 1 copy'
        },
        {
            'headline': 'Travel 2',
            'copy': 'This is travel 2 copyThis is travel 2 copyThis is travel 2 copyThis is travel 2 copyThis is travel 2 copy'
        },
        {
            'headline': 'Travel 3',
            'copy': 'This is travel 3 copyThis is travel 3 copyThis is travel 3 copyThis is travel 3 copyThis is travel 3 copy'
        }
    ],
    'rsvp': {
        'headline': 'RSVP',
        'copy': 'We are so excited to have you join us on our special day. At your earliest convience, please find your name in the text box below and let us know if you will be in attendance. See you in Scotland!',
        'invitationNames': invitationNames,
        'formFields': [
            {
                'name': 'name',
                'type': 'text',
                'label': 'Name'
            },
            {
                'name': 'email',
                'type': 'text',
                'label': 'Email Address'
            },
/*            {
                'name': 'food',
                'type': 'select',
                'label': 'Wedding Reception Dinner Option',
                'options': [
                    {'value': 'chicken', 'label': 'Chicken'},
                    {'value': 'fish', 'label': 'Fish'},
                    {'value': 'vegetarian', 'label': 'Vegetarian'}
                ]
            },
*/
            {
                'name': 'attending',
                'type': 'select',
                'label': 'Will this person be attending',
                'options': [
                    {'value': 'yes', 'label': 'Yes'},
                    {'value': 'no', 'label': 'No'}
                ]
            }
        ]
    },
    'contact': [
        {
            'name': 'Jon Gamble',
            'phone': '919.610.5206',
            'email': 'jon@jongamble.com'
        },
        {
            'name': 'Kate McKee',
            'phone': '919.225.7922',
            'email': 'katemckee90@gmail.com'
        }
    ],
    'registry': [
        {
            'store': 'Amazon',
            'link': 'http://www.amazom.com',
            'image': 'amazon-logo.png'
        },
        {
            'store': 'Crate and Barrel',
            'link': 'http://www.crateandbarrel.com',
            'image': 'crate-and-barrel-logo.png'
        },
        {
            'store': 'Pottery Barn',
            'link': 'http://www.potterybarn.com',
            'image': 'pottery-barn-logo.png'
        }
    ],
    'bridalParty': {
        'groom': [
            {
                'name': '',
                'copy': '',
                'image': ''
            }
        ],
        'bride': [
            {
                'name': '',
                'copy': '',
                'image': ''
            }
        ]
    }
};

export default indexData;