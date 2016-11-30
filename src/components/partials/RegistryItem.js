import React, {Component} from 'react';

export default class RegistryItem extends Component {
    render() {
        return (
            <li key={"registry-" + this.props.index} className="registry-list--item">
                <a href={this.props.link} target="_blank">
                    <img src={this.props.image} alt={this.props.store} />
                </a>
                <h2 className="registry-list--name">{this.props.store}</h2>
            </li>
        );
    }
}
