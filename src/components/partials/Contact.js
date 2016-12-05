import React, { Component } from 'react';
import ContactCard          from './ContactCard';

export default class Contact extends Component {
    getContactContent() {
        const contactData = this.props.data;

        return contactData ? (
            <ul className="contact-list">
                {this.props.data.map((item, index) =>
                    <ContactCard
                        {...item}
                        key={index}
                    />
                )}
            </ul>
        ) : '';
    }

    render() {
        return (
            <section className="_section contact`">
                <div className="_section--container">
                    <h1 className="_section-heading">
                        <span className="_section-heading--text">Contact</span>
                    </h1>
                    {this.getContactContent()}
                </div>
            </section>
        );
    }
}
