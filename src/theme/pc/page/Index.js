import React from 'react';

import $ from 'jquery';

import CommonHeader from './CommonHeader';
import Main from './Main';
import CommonFooter from './CommonFooter';

class Index extends React.Component {

    componentDidMount() {

        let _this = this;
        document.body.addEventListener('scroll', function (e) {
            var top = $(this).scrollTop();
            var height = $(window).height();
            if (top > height) {
                $('#gotoTop').addClass('show');
            } else {
                $('#gotoTop').removeClass('show');
            }
            // 显示动画
            _this.showAnimate('commitment', top);
            _this.showAnimate('product', top);
            _this.showAnimate('gold', top);
            _this.showAnimate('about', top);
            _this.showAnimate('cooperation', top);
            _this.showAnimate('other', top);
        });

    }

    showAnimate(el, scrollTop) {
        if (document.getElementById(el)) {
            var top = document.getElementById(el).offsetTop;
            if (top >= scrollTop && top < (scrollTop + $(window).height())) {
                $('#' + el).find('.item-wrap').addClass('show-animate');
            }
        }
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

export default Index;