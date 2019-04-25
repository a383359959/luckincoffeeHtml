import React from 'react';
import Swiper from 'swiper';

class Banner extends React.Component {

    componentDidMount() {

        this.resize();

        const banner = new Swiper('.swiper-container', {
            loop: true,
            autoplay: true
        });

    }

    resize() {

        const clientWidth = window.innerWidth;
        const clientHeight = window.innerHeight - 60;

        document.getElementById('swiper-container').style.width = clientWidth + 'px';
        document.getElementById('swiper-container').style.height = clientHeight + 'px';

    }

    render() {

        return (
            <div className={'banner'}>
                <div className={'swiper-container'} id={'swiper-container'}>
                    <div className={'swiper-wrapper'}>
                        <div className={'swiper-slide'}><img src={'images/banner.jpg'} /></div>
                    </div>
                </div>
            </div>
        );

    }

}

export default Banner;