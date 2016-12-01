import React, {Component} from 'react';

export default class ContactCard extends Component {
    render() {
        return (
            <li key={"contact-" + this.props.index} className="contact-list--item">
                <h2 className="contact-list--name">{this.props.name}</h2>
                <p className="contact-list--phone">{this.props.phone}</p>
                <a
                    className="contact-list--email"
                    href={'mailto:' + this.props.email}
                >
                        {this.props.email}
                </a>
            </li>
        );
    }
}
