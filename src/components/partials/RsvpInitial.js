import React, { Component } from 'react';
var Typeahead = require('react-typeahead-fix').Typeahead;

export default class RsvpInitial extends Component {
    render() {
        return(
            <div className="rsvp-initial">
                <p className="rsvp-initial--copy">Please type the name on your invitation.</p>
                <Typeahead
                    options={this.props.nameList}
                    onOptionSelected={this.props.onChange}
                    maxVisible={6}
                    customClasses={{input: 'rsvp-initial--textbox', results: 'rsvp-initial--results-box'}}
                />
            </div>
        );
    }
}
