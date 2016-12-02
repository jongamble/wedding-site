import React, { Component } from 'react';
import invitationNames      from '.../../data/invitation-names';
import RsvpInitial          from './RsvpInitial';
import _                    from 'lodash';

export default class Rsvp extends Component {
    getInitialState() {
        return {
            invitees: [],
            inviteName: null,
            inviteNumber: null
        }
    }

    componentDidMount() {
        console.log('this mounted');
    }

    onClick() {
        let newState = this.state;

        // if inviteName is present in the data, return the invite Number associated with it, else return false and proceed.

        newState.inviteName = this.name.value;
        newState.invitees.push(
            <RsvpCards amount={newState.inviteNumber} name={newState.inviteName} />
        );
        this.setState(newState).forceUpdate();
    }

    renderInitial() {
        return (this.state.invitees.length) ? (
            <RsvpInitial showInvitees={this.onClick} />
        ) : null;
    }

    render() {
        return (
            <section className="_section contact`">
                <div className="_section--container">
                    <h1 className="_section-heading">
                        <span className="_section-heading--text">{this.props.headline}</span>
                    </h1>
                    <p className="rsvp-copy">{this.props.copy}</p>
                    {this.renderInitial}
                    {this.state.tickets}
                </div>
            </section>
        );
    }
}
