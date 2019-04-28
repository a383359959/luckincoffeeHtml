import React from 'react';
import Swiper from 'swiper';

class Banner extends React.Component {

    componentDidMount() {

        const banner = new Swiper('.swiper-container', {
            loop: true,
            autoplay: true,
            autoHeight: true
        });

    }

    render() {

        return (
            <div className={'mobile_banner'}>
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