import React from 'react';

export default class Header extends React.Component {
    render() {
        return (
            <header className="header">
                <div className="header-content">
                    <h2 className="header-location">{this.props.location}</h2>
                    <div className="header-name-container">
                        <h1 className="header-name">{this.props.leftName}</h1>
                        <img className="header-image" src={this.props.image} />
                        <h1 className="header-name">{this.props.rightName}</h1>
                    </div>
                    <h2 className="header-date">{this.props.date}</h2>
                </div>
            </header>
        );
    }
}