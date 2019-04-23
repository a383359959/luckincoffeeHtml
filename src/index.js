import React from 'react';
import ReactDOM from 'react-dom';

import './style.css';
import CommonHeader from './CommonHeader';
import Banner from './Banner';
import Main from './Main';

class Container extends React.Component {

    render() {
        return (
            <div>
                <CommonHeader />
                <Banner />
                <Main />
            </div>
        );
    }

}

ReactDOM.render(<Container />, document.getElementById('container'));