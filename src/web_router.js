import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import PC_Index from './theme/pc/page/Index';
import PC_About from './theme/pc/page/About';

class WebRouter extends React.Component {

    render() {

        return (
            <Router>
                <Route exact path={'/'} component={ PC_Index } />
                <Route path={'/index'} component={ PC_Index } />
                <Route path={'/about'} component={ PC_About } />
            </Router>
        );

    }

}

export default WebRouter;