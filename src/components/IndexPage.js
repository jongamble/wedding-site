import React   from 'react';
import data    from '../data/index-page';
import Travel  from './partials/Travel';
import Contact from './partials/Contact';
import Registry from './partials/Registry';

export default class IndexPage extends React.Component {
    render() {
        return (
            <div className="main">
                <Travel data={data.travel} />
                <Contact data={data.contact} />
                <Registry data={data.registry} />
            </div>
        );
    }
}