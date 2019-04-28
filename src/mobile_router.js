import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Mobile_Index from './theme/mobile/page/Index';
import Mobile_About from "./theme/mobile/page/About";

class MobileRouter extends React.Component {

    render() {

        return (
            <Router>
                <Route exact path={'/'} component={ Mobile_Index } />
                <Route path={'/index'} component={ Mobile_Index } />
                <Route path={'/about'} component={ Mobile_About } />
            </Router>
        );

    }

}

export default MobileRouter;