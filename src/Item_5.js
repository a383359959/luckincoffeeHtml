import React from 'react';

const style_1 = {
    backgroundImage: 'url("/images/part5_picture1.png")'
}

const style_2 = {
    backgroundImage: 'url("/images/part5_picture2.png")'
}

class Item_5 extends React.Component{

    render() {

        return (
            <li id={'cooperation'} className={'animate-item'}>
                <div className={'item-wrap show-animate'}>
                    <div className={'cooperation-text'}>
                        <div className={'hd'}></div>
                        <div className={'bd'}>
                            <p className={'chinese'}>
                                为大型企业、中高端写字楼提供专业咖啡配套。欢迎各类咖啡厅转让。
                            </p>
                            <p className={'english'}>
                                For providing professional coffee services for large enterprises and mid-high end office
                                buildings,
                                please call us. Store
                                ownership transfer is also welcomed.
                            </p>
                        </div>
                    </div>
                    <ul className={'cooperation-image'}>
                        <li className={'item img-el item-1'} style={style_1}></li>
                        <li className={'item img-el item-2'} style={style_2}></li>
                    </ul>
                </div>
            </li>
        );

    }

}

export default Item_5;