import React from 'react';

const style_1 = {
    backgroundImage: 'url("/images/bg.png")'
}

const style_2 = {
    backgroundImage: 'url("/images/down2.png")'
}

const style_3 = {
    backgroundImage: 'url("/images/attention.png")'
}

class Item_6 extends React.Component{

    render() {

        return (
            <li id={'other'} className={'animate-item'}>
                <div className={'item-wrap img-el show-animate'} style={style_1}>
                    <div className={'other-content'}>
                        <div className={'hd'}></div>
                        <div className={'bd'}>
                            <div className={'code-content'}>
                                <div className={'code-wrap'}>
                                    <div className={'qrcode img-el'} style={style_2}></div>
                                </div>
                                <div className={'text-wrap'}>
                                    <p className={'chinese'}>下载APP，新用户首件免费 再得5折大券包</p>
                                    <p className={'english'}>Download the APP to get any one free of your first deal plus
                                        50% discount coupons</p>
                                </div>
                            </div>
                            <div className={'code-content'}>
                                <div className={'code-wrap'}>
                                    <div className={'qrcode img-el'} style={style_3}></div>
                                </div>
                                <div className={'text-wrap'}>
                                    <p className={'chinese'}>关注微信和幸运打个招呼</p>
                                    <p className={'english'}>Follow our WeChat and good luck!</p>
                                </div>
                            </div>
                        </div>
                        <a href="javascript:;" className={'invite'}>正在招聘，加入我们
                            <span>→</span>
                        </a>
                    </div>
                </div>
            </li>
        );

    }

}

export default Item_6;