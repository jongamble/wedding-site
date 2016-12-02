import React, { Component }    from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import invitationNames         from '../../data/invitation-names';
import RsvpInitial             from './RsvpInitial';
import RsvpCard                from './RsvpCard';
import _                       from 'lodash';

export default class Rsvp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inviteName: '',
            inviteNumber: ''
        };
        this.onInitialChange = this.onInitialChange.bind(this);
        this.onSecondaryChange = this.onSecondaryChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let state = this.state;
        console.log('Submit Current State');
        console.log(state);

        // if inviteName is present in the data, return the invite Number associated with it, else return false and proceed.

        // newState.inviteName.push(this.refs.inputText.value);
        // newState.invitees.push(
        //     <RsvpCards amount={newState.inviteNumber} name={newState.inviteName} />
        // );
        // this.setState(newState).forceUpdate();
    }

    onInitialChange(name) {
        var state = {};
        state['inviteName'] =  _.trim(name);
        state['inviteNumber'] = _.find(invitationNames, { 'name': name}).numberInvited;
        this.setState(state);
    }
    onSecondaryChange(e) {
        console.log(e.target);
        var state = {};
        state[e.target.name] =  _.trim(e.target.value);
        this.setState(state);
    }

    getInvitationList() {
        let nameList = [];
        invitationNames.map(name => {
            nameList.push(name.name);
        });
        return nameList;
    }

    renderCards() {
        let cards = [];
        for(let i = 0; i < this.state.inviteNumber; i++) {
            cards.push(
                <RsvpCard
                    key={'render-cards-' + i}
                    index={i}
                    fields={this.props.formFields}
                    onChange={this.onSecondaryChange}
                />
            );
        }
        return cards;
    }

    renderInitial() {
        return (!this.state.inviteName.length) ? (
            <RsvpInitial
                showInvitees={this.handleSubmit}
                onChange={this.onInitialChange}
                nameList={this.getInvitationList()}
            />
        ) : (
                <form method="post" name="rsvp-cards" className="rsvp-cards" onSubmit={this.handleSubmit}>
                    <div className="rsvp-cards--container">
                        {this.renderCards()}
                    </div>
                    <button type="submit" name="submit" className="rsvp-cards--button">Submit</button>
                </form>
        );
    }

    render() {
        return (
            <section className="_section rsvp`">
                <div className="_section--container">
                    <h1 className="_section-heading">
                        <span className="_section-heading--text">{this.props.headline}</span>
                    </h1>
                    <p className="rsvp-copy">{this.props.copy}</p>
                        {this.renderInitial()}
                </div>
            </section>
        );
    }
}
