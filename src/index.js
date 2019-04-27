import React from 'react';
import ReactDOM from 'react-dom';

import $ from 'jquery';

import 'swiper/dist/css/swiper.css'

import PC_Index from './theme/pc/page/Index';
import Mobile_Index from './theme/mobile/page/Index';

// 电脑样式
import './theme/pc/css/base.css';
import './theme/pc/css/style.css';
import './theme/pc/css/index.css';

// 手机样式
import './theme/mobile/css/style.css';
import './theme/mobile/css/base.css';
import './theme/mobile/css/index.css';

loadPage();

$(window).resize(function(){
    loadPage();
});

function loadPage(){
    var width = $(window).width();
    if (width >= 1140) {
        ReactDOM.render(<PC_Index />, document.getElementById('container'));
        ReactDOM.render('', document.getElementById('root'));
    } else {
        ReactDOM.render('', document.getElementById('container'));
        ReactDOM.render(<Mobile_Index />, document.getElementById('root'));
    }
}