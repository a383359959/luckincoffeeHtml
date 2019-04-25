import React from 'react';

class Item_3 extends React.Component {

    render() {

        return (
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
        );

    }

}

export default Item_3;