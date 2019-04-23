import React from 'react';

class Main extends React.Component {

    render() {

        return (
            <div id={'main'}>
                <ul id={'animate-wrap'}>
                    <li id={'commitment'}>
                        <div className={'item-wrap show-animate'}>
                            <div className={'commitment-desc'}>
                                <div className={'hd'}></div>
                            </div>
                            <div className={'commitment-float'}>
                                <div className={'float-item float-4'}>
                                    <div className={'code-wrap img-el'}>
                                        <div className={'qrcode img-el'}></div>
                                    </div>
                                    <p className={'chinese'}>下载APP，新用户首件免费 再得5折大券包</p>
                                    <p className={'english'}>Download the APP to get any one free of your first deal plus 50% discount coupons</p>
                                </div>
                                <div className={'float-item float-3 animate'}></div>
                                <div className={'float-item img-el float-1'}></div>
                                <div className={'float-item img-el float-2'}></div>
                            </div>
                        </div>
                    </li>
                    <li id={'product'} className={'animate-item'}>
                        <div className={'item-wrap img-el show-animate'}></div>
                        <div className={'item-wrap slogan-wrap show-animate'}>
                            <div className={'product-slogan'}>
                                <div className={'hd'}></div>
                                <ul className={'bd'}>
                                    <li className={'slogan-item item-2'}>
                                        <div className={'title'}>
                                            <p className={'chinese'}>优选上等阿拉比卡豆</p>
                                            <p className={'english'}>High Quality Arabica Beans</p>
                                        </div>
                                        <div className={'desc'}>
                                            <p className={'chinese'}>我们从四大咖啡产区，为您精心挑选阿拉比卡豆。</p>
                                            <p className={'english'}>Our coffee beans come directly from top coffee
                                                producing regions, and we make sure
                                                each and every bean
                                                is Arabica.</p>
                                        </div>
                                    </li>
                                    <li className={'slogan-item item-3'}>
                                        <div className={'title'}>
                                            <p className={'chinese'}>WBC冠军团队精心拼配</p>
                                            <p className={'english'}>Blended by the WBC Champions</p>
                                        </div>
                                        <div className={'desc'}>
                                            <p className={'chinese'}>来自意大利、日本、中国的咖啡大师们，为您拼配。</p>
                                            <p className={'english'}>Every batch of our coffee is carefully blended by our
                                                team of the WBC champions,
                                                hailing from Italy, Japan,
                                                and China.</p>
                                        </div>
                                    </li>
                                    <li className={'slogan-item item-1'}>
                                        <div className={'title'}>
                                            <p className={'chinese'}>新鲜烘焙 新鲜现磨</p>
                                            <p className={'english'}>Freshly roasted, freshly ground.</p>
                                        </div>
                                        <div className={'desc'}>
                                            <p className={'chinese'}>您品尝的每一杯luckin，均为烘焙熟豆的最佳赏味期。</p>
                                            <p className={'english'}>Every cup of our coffee is made fresh just for you,
                                                guaranteed.</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </li>
                    <li id={'gold'} className={'animate-item'}>
                        <div className={'gold-wrap'}>
                            <div className={'gold-logo'}></div>
                            <div className={'gold-content'}>
                                <div className={'gold-title'}>luckin coffee最新升级咖啡豆Espresso Coffee#A</div>
                                <div className={'gold-title'}>荣获 米兰 2018 IIAC国际咖啡品鉴大赛金奖</div>
                                <div className={'gold-tips'}>Espresso Coffee #A by luckin coffee is awarded Gold Medal at
                                    the International
                                    Coffee
                                    Tasting 2018 held in Milan by the International institute of Coffee Tasters (IIAC).
                                </div>
                            </div>
                        </div>
                    </li>
                    <li id={'about'} className={'animate-item'}>
                        <div className={'item-wrap show-animate'}>
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
                                <li className={'item img-el item-1'}></li>
                                <li className={'item img-el item-2'}></li>
                                <li className={'item img-el item-3'}></li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        );

    }

}

export default Main;