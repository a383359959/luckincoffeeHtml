import React from 'react';

const style_1 = {
    backgroundImage: 'url("/images/part4_picture1.png")'
}

const style_2 = {
    backgroundImage: 'url("/images/part4_picture2.png")'
}

const style_3 = {
    backgroundImage: 'url("/images/part4_picture3.png")'
}

class Item_4 extends React.Component {

    render() {

        return (
            <li id={'about'} className={'animate-item'}>
                <div className={'item-wrap'}>
                    <div className={'about-text'}>
                        <div className={'hd'}></div>
                        <div className={'bd'}>
                            <p className={'chinese'}>
                                luckin coffee（瑞幸咖啡），专业的咖啡新鲜式：优选上等阿拉比卡豆，由WBC（世界咖啡师大赛）冠军团队精心拼配，新鲜烘焙，新鲜现磨。luckin
                                coffee倡导更灵活的购买体验，遍布各商圈写字楼，可自提可配送，已成为咖啡新零售代表连锁品牌。
                            </p>
                            <p className={'english'}>
                                luckin coffee proudly serves fresh coffee as a rising professional. Our coffee
                                is freshly roasted, and
                                ground with high quality Arabica beans, which are carefully blended by our team
                                of the WBC champions.
                                We advocate a more
                                flexible
                                experience for our customers by providing pickup and delivery options, while
                                also locating our coffee
                                shops
                                in main shopping centers and office districts. luckin coffee is becoming the new
                                trend of coffee retail
                                brand.
                            </p>
                        </div>
                    </div>
                    <ul className={'about-image'}>
                        <li className={'item img-el item-1'} style={style_1}></li>
                        <li className={'item img-el item-2'} style={style_2}></li>
                        <li className={'item img-el item-3'} style={style_3}></li>
                    </ul>
                </div>
            </li>
        );

    }

}

export default Item_4;