import React, {Component} from 'react';
import TravelItem         from './TravelItem';

export default class Travel extends Component {
    getTravelContent() {
        const travelData = this.props.data;

        return travelData ? (
            <ul className="travel-list">
                {this.props.data.map((item, index) =>
                    <TravelItem
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
                    <h1 className="_section-heading">Travel and Accommodations</h1>
                    {this.getTravelContent()}
                </div>
            </section>
        );
    }
}