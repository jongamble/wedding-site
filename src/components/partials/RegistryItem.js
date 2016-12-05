import React, {Component} from 'react';
import Image from '../helpers/Image';

export default class RegistryItem extends Component {
    render() {
        return (
            <li key={"registry-" + this.props.index} className="registry-list--item">
                <a href={this.props.link} target="_blank" className="registry-list--link">
                    <Image
                        class="registry-list--image"
                        image={this.props.image}
                        alt={this.props.store}
                    />
                </a>
                <h2 className="registry-list--name">{this.props.store}</h2>
            </li>
        );
    }
}
