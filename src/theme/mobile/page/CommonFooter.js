import React from 'react';

class CommonFooter extends React.Component {

    render() {
        return (
            <div className={'footer'}>
                <div className={'companyName'}>瑞幸咖啡（北京）有限公司&nbsp;&nbsp;&nbsp;&nbsp;京ICP备17074868号</div>
                <div className={'companyInfo'}>
                    <div className={'companyTel'}>电话：0592-3386666</div>
                    <div className={'companyAddr'}>地址：厦门市思明区塔埔东路169号2层201单元L室</div>
                </div>
                <div className={'companyDetail'}>
                    <div>Copyright©2018 www.luckincoffee.com All Rights Reserved</div>
                </div>
            </div>
        );
    }

}

export default CommonFooter;