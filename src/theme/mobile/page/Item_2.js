import React from 'react';

class Item_2 extends React.Component {

    render() {

        return (
            <div className={'productPoint'}>
                <div className={'productPointBg'}></div>
                <div className={'productPointInfo'}>
                    <div className={'productModule module_1'}>
                        <div className={'mainTitle'}>优选上等阿拉比卡豆</div>
                        <div className={'mainTitleEN'}>High Quality Arabica Beans</div>
                        <div className={'secondTitle'}>我们从四大咖啡产区，为您精心挑选阿拉比卡豆。</div>
                        <div className={'secondTitleEN'}>Our coffee beans come directly from top coffee producing regions,
                            and we make sure each and every bean is Arabica.
                        </div>
                    </div>
                    <div className={'productModule module_2'}>
                        <div className={'mainTitle'}>WBC冠军团队精心拼配</div>
                        <div className={'mainTitleEN'}>Blended by the WBC Champions</div>
                        <div className={'secondTitle'}>来自意大利、日本、中国的咖啡大师们，为您拼配。</div>
                        <div className={'secondTitleEN'}>Every batch of our coffee is carefully blended by our team of the
                            WBC champions, hailing from Italy, Japan, and China.
                        </div>
                    </div>
                    <div className={'productModule module_3'}>
                        <div className={'mainTitle'}>新鲜烘焙 新鲜现磨</div>
                        <div className={'mainTitleEN'}>Freshly roasted, freshly ground.</div>
                        <div className={'secondTitle'}>您品尝的每一杯luckin，均为烘焙熟豆的最佳赏味期。</div>
                        <div className={'secondTitleEN'}>Every cup of our coffee is made fresh just for you, guaranteed.
                        </div>
                    </div>
                </div>
            </div>
        );

    }

}

export default Item_2;