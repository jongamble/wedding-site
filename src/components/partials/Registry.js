import React, {Component} from 'react';
import RegistryItem       from './RegistryItem';

export default class Registry extends Component {
    getRegistryContent() {
        const registryData = this.props.data;

        return registryData ? (
            <ul className="registry-list">
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
            <section className="_section registry" id="registry">
                <div className="_section--container">
                    <h1 className="_section-heading">
                        <span className="_section-heading--text">Wedding Registry</span>
                    </h1>
                    {this.getRegistryContent()}
                </div>
            </section>
        );
    }
}