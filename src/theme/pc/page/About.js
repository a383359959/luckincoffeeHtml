import React from 'react';
import $ from 'jquery';

import CommonHeader from './CommonHeader';
import AboutMain from './AboutMain';
import CommonFooter from './CommonFooter';

class About extends React.Component {

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
        });

        $('.nav').bind('click', function(){
            var index = $(this).index();
            if (index == 4) return '';
            $('.nav .nav-item').removeClass('active');
            $(this).find('.nav-item').addClass('active');
            $('.about-item').hide();
            $('.about-item').eq(index).show();
        });

    }

    render() {

        return (
            <div id={'docwrap'}>
                <CommonHeader />
                <div id={'banner'} className={'banner-wrap'}>
                    <div className={'banner'}></div>
                </div>
                <AboutMain />
                <CommonFooter />
                <div id={'gotoTop'}></div>
            </div>
        );

    }

}

export default About;