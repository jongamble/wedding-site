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
            <section className="_section travel" id="travel">
                <div className="_section--container">
                    <h1 className="_section-heading">
                        <span className="_section-heading--text">Travel and Accommodations</span>
                    </h1>
                    {this.getTravelContent()}
                </div>
            </section>
        );
    }
}