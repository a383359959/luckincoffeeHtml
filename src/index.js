import React from 'react';
import ReactDOM from 'react-dom';
import WebRouter from './web_router';
import MobileRouter from './mobile_router';

import $ from 'jquery';


import './theme/pc/css/style.css';
import './theme/pc/css/base.css';
import './theme/pc/css/index.css';
import './theme/pc/css/about.css';

import './theme/mobile/css/base.css';
import './theme/mobile/css/index.css';
import './theme/mobile/css/style.css';
import './theme/mobile/css/about.css';

import 'swiper/dist/css/swiper.css'

loadPage();

$(window).resize(function(){
    loadPage();
});

function loadPage(){
    var width = $(window).width();
    if (width >= 1140) {
        ReactDOM.render(<WebRouter />, document.getElementById('container'));
        ReactDOM.render('', document.getElementById('root'));
    } else {
        ReactDOM.render('', document.getElementById('container'));
        ReactDOM.render(<MobileRouter />, document.getElementById('root'));
    }
}