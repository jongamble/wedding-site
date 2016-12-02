import React   from 'react';
import data    from '../data/index-page';
import Travel  from './partials/Travel';
import Contact from './partials/Contact';
import Registry from './partials/Registry';
import Rsvp from './partials/Rsvp';

export default class IndexPage extends React.Component {
    render() {
        return (
            <div className="main">
                <Travel data={data.travel} />
                <Rsvp {...data.rsvp} />
                <Contact data={data.contact} />
                <Registry data={data.registry} />
            </div>
        );
    }
}