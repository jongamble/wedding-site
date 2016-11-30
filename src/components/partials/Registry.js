import React, {Component} from 'react';
import RegistryItem       from './RegistryItem';

export default class Registry extends Component {
    getRegistryContent() {
        const registryData = this.props.data;

        return registryData ? (
            <ul className="travel-list">
                {this.props.data.map((item, index) =>
                    <RegistryItem
                        {...item}
                        key={index}
                    />
                )}
            </ul>
        ) : null;
    }

    render() {
        return (
            <section className="_section travel">
                <div className="_section--container">
                    <h1 className="section-heading">Wedding Registry</h1>
                    {this.getRegistryContent()}
                </div>
            </section>
        );
    }
}