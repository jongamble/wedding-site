import React, { Component } from 'react';

export default class RsvpInitial extends Component {
    getInitialState() {
        return{};
    }

    render() {
        return(
            <input className="rsvp-textbox" type="text" ref={(c) => this.name = c} name="name"/>
            <button type="button" onClick={this.props.showInvitees.bind(this)} className="rsvp-show-button">
                Submit
            </button>
        );
    }
}
