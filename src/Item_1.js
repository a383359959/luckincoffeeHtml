import React from 'react';

const style_1 = {
    backgroundImage: 'url("/images/part2_picture1.png")'
}

const style_2 = {
    backgroundImage: 'url("/images/part2_picture2.png")'
}

const style_3 = {
    backgroundImage: 'url("/images/part2_code_bg.png")'
}

const style_4 = {
    backgroundImage: 'url("/images/down2.png")'
}

class Item_1 extends React.Component {

    render() {

        return (
            <li id={'commitment'}>
                <div className={'item-wrap'}>
                    <div className={'commitment-desc'}>
                        <div className={'hd'}></div>
                    </div>
                    <div className={'commitment-float'}>
                        <div className={'float-item float-4'}>
                            <div className={'code-wrap img-el'} style={style_3}>
                                <div className={'qrcode img-el'} style={style_4}></div>
                            </div>
                            <p className={'chinese'}>下载APP，新用户首件免费 再得5折大券包</p>
                            <p className={'english'}>Download the APP to get any one free of your first deal plus 50%
                                discount coupons</p>
                        </div>
                        <div className={'float-item float-3 animate'}></div>
                        <div className={'float-item img-el float-1'} style={style_1}></div>
                        <div className={'float-item img-el float-2'} style={style_2}></div>
                    </div>
                </div>
            </li>
        );

    }

}

export default Item_1;