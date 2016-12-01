import React from 'react';
import Image from '../helpers/Image';

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header-content">
                    <h2 className="header-location">{this.props.location}</h2>
                    <div className="header-name-container">
                        <h1 className="header-name">{this.props.leftName}</h1>
                        <h1 className="header-name">{this.props.rightName}</h1>
                        <Image
                            class="header-image"
                            image={this.props.image}
                            alt="Raemoir House Hotel"
                        />
                    </div>
                    <h2 className="header-date">{this.props.date}</h2>
                </div>
            </header>
        );
    }
}