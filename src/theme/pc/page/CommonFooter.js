import React from 'react';

const style_1 = {
    fontSize: '12px'
}

class CommonFooter extends React.Component{

    render() {
        return (
            <footer id={'footer'} className={'footer'}>
                <div className={'sub-logo'}></div>
                <div className={'inscribe'}>
                    <p className={'company'}>
                        <a href="javascript:;">瑞幸咖啡（北京）有限公司</a>
                        <a target="_blank" href="http://www.miibeian.gov.cn">京ICP备17074868号</a>
                    </p>
                    <p className={'version'} style={style_1}>
                        电话：0592-3386666 地址：厦门市思明区塔埔东路169号2层201单元L室<br />
                        Copyright©2018 www.luckincoffee.com All Rights Reserved
                    </p>
                </div>
            </footer>
        );
    }

}

export default CommonFooter;