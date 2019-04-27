import React from 'react';
import {Router, Route} from 'react-router';

import Index from 'index';

class PCRouter extends React.Component {

    render() {

        return (
            <Router>
                <Route path="index" component={Index} />
            </Router>
        );

    }

}

export default PCRouter;