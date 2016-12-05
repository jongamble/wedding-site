import React, {Component} from 'react';

export default class TravelItem extends Component {
    render() {
        return (
            <li key={"travel-" + this.props.index} className="travel-list--item">
                <h3 className="travel-list--heading">{this.props.headline}</h3>
                <p className="travel-list--copy">{this.props.copy}</p>
            </li>
        );
    }
}
