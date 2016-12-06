'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _invitationNames = require('./invitation-names');

var _invitationNames2 = _interopRequireDefault(_invitationNames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var indexData = {
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
    'travel': [{
        'headline': 'Travel 1',
        'copy': 'This is travel 1 copyThis is travel 1 copyThis is travel 1 copyThis is travel 1 copyThis is travel 1 copy'
    }, {
        'headline': 'Travel 2',
        'copy': 'This is travel 2 copyThis is travel 2 copyThis is travel 2 copyThis is travel 2 copyThis is travel 2 copy'
    }, {
        'headline': 'Travel 3',
        'copy': 'This is travel 3 copyThis is travel 3 copyThis is travel 3 copyThis is travel 3 copyThis is travel 3 copy'
    }, {
        'headline': 'Travel 3',
        'copy': 'This is travel 3 copyThis is travel 3 copyThis is travel 3 copyThis is travel 3 copyThis is travel 3 copy'
    }, {
        'headline': 'Travel 3',
        'copy': 'This is travel 3 copyThis is travel 3 copyThis is travel 3 copyThis is travel 3 copyThis is travel 3 copy'
    }],
    'events': [{
        'headline': 'Travel 1',
        'copy': 'This is travel 1 copyThis is travel 1 copyThis is travel 1 copyThis is travel 1 copyThis is travel 1 copy'
    }, {
        'headline': 'Travel 2',
        'copy': 'This is travel 2 copyThis is travel 2 copyThis is travel 2 copyThis is travel 2 copyThis is travel 2 copy'
    }, {
        'headline': 'Travel 3',
        'copy': 'This is travel 3 copyThis is travel 3 copyThis is travel 3 copyThis is travel 3 copyThis is travel 3 copy'
    }],
    'rsvp': {
        'headline': 'RSVP',
        'copy': 'This is some placeholder rsvp copy that will tell the user how to access and how we are so excited that they are coming to the wedding. This will be about 2-3 short sentences and really serve no purpose other than window dressing.',
        'invitationNames': _invitationNames2.default,
        'formFields': [{
            'name': 'name',
            'type': 'text',
            'label': 'Name'
        }, {
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
            'options': [{ 'value': 'yes', 'label': 'Yes' }, { 'value': 'no', 'label': 'No' }]
        }]
    },
    'contact': [{
        'name': 'Jon Gamble',
        'phone': '919.610.5206',
        'email': 'jon@jongamble.com'
    }, {
        'name': 'Kate McKee',
        'phone': '919.225.7922',
        'email': 'katemckee90@gmail.com'
    }],
    'registry': [{
        'store': 'Amazon',
        'link': 'http://www.amazom.com',
        'image': 'amazon-logo.png'
    }, {
        'store': 'Crate and Barrel',
        'link': 'http://www.crateandbarrel.com',
        'image': 'crate-and-barrel-logo.png'
    }, {
        'store': 'Pottery Barn',
        'link': 'http://www.potterybarn.com',
        'image': 'pottery-barn-logo.png'
    }],
    'bridalParty': {
        'groom': [{
            'name': '',
            'copy': '',
            'image': ''
        }],
        'bride': [{
            'name': '',
            'copy': '',
            'image': ''
        }]
    }
};

exports.default = indexData;