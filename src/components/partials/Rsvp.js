import React, { Component }    from 'react';
import XMLHttpRequestPromise   from 'xhr-promise';
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
            inviteNumber: '',
            rsvpError: false,
            rsvpSubmitted: false
        };
        this.onInitialChange = this.onInitialChange.bind(this);
        this.onSecondaryChange = this.onSecondaryChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        const _this = this;
        let state = this.state,
            dataPush = {};

        for(let i = 0; i < state.inviteNumber; i++) {
            dataPush[i] = {'inviteName': state.inviteName};
            this.props.formFields.forEach((field) => {
                dataPush[i][field.name] = state[field.name + '-' + i];
            });

        }

        // Create an empty Headers instance
        var headers = new Headers();
        headers.set('Content-Type', 'application/json');

        var myInit = { method: 'post',
                       headers: headers,
                       body: JSON.stringify(dataPush)
                   };

        fetch(new Request('/api', myInit))
        .then(function(response) {
            return response.json()
          }).then(function(json) {
            console.log('parsed json', json)
            _this.setState({rsvpSubmitted: true});
          }).catch(function(ex) {
            console.log('parsing failed', ex)
            _this.setState({rsvpError: true});
          })

    }

    onInitialChange(name) {
        var state = {};
        state['inviteName'] =  _.trim(name);
        state['inviteNumber'] = _.find(invitationNames, { 'name': name}).numberInvited;
        this.setState(state);
    }

    onSecondaryChange(e) {
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

    errorFrame() {
        return (this.state.rsvpError) ? (
                <div className="rsvp-error">
                    There was an error with your submission. Please try again.
                </div>
            )
            : null;
    }

    renderInitial() {
        return (!this.state.inviteName.length) ? (
            <RsvpInitial
                showInvitees={this.handleSubmit}
                onChange={this.onInitialChange}
                nameList={this.getInvitationList()}
            />
        ) : (
            (!this.state.rsvpSubmitted) ? (
                <form method="post" name="rsvp-cards" className="rsvp-cards" onSubmit={this.handleSubmit}>
                    {this.errorFrame()}
                    <div className="rsvp-cards--container">
                        {this.renderCards()}
                    </div>
                    <button type="submit" name="submit" className="rsvp-cards--button">Submit</button>
                </form>
            ) : (
                <div className="rsvp-submitted">
                    <h2 className="rsvp-submitted--header">Success!</h2>
                    <p className="rsvp-submitted--copy">Your response has been recorded. We look forward to seeing you soon!</p>
                </div>
            )
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
