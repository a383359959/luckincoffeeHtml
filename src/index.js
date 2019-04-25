import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

import './base.css';
import './style.css';
import './index.css';

import CommonHeader from './CommonHeader';
import Main from './Main';
import CommonFooter from './CommonFooter';

class Container extends React.Component {

    constructor(props){
        super(props)
        this.state = {};
        this.scrollTop = 0;
        this.handleScroll = this.handleScroll.bind(this)
    }

    componentDidMount() {

        window.addEventListener('scroll', this.handleScroll)
        // this.onsc

        // $('#container').scroll((event) => {
            // console.log(event);
            // console.log(event.scrollTop());
        // });
        // this.handleScroll();
        // window.addEventListener('scroll', this.handleScroll);

    }

    handleScroll(event) {

        // console.log('asd');
        console.log(event);

    }

    render() {
        return (
            <div id={'docwrap'}>
                <CommonHeader />
                <Main />
                <CommonFooter />
                <div id={'gotoTop'}></div>
            </div>
        );
    }

}

ReactDOM.render(<Container />, document.getElementById('container'));