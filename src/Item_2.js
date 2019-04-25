import React from 'react';

const style_1 = {
    backgroundImage: 'url("/images/bg.jpg")'
}

class Item_2 extends React.Component {

    render() {

        return (
            <li id={'product'} className={'animate-item'}>
                <div className={'item-wrap img-el show-animate'} style={style_1}></div>
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
        );

    }

}

export default Item_2;