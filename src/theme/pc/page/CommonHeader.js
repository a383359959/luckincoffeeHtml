import React from 'react';

class CommonHeader extends React.Component {

    render() {

        return (
            <header>
                <div className={'header_container'}>
                    <div className={'logo'}><img src="https://s2.luckincoffeecdn.com/luckywebrm/images/logo.png" /></div>
                    <div className={'menu'}>
                        <ul>
                            <li><a href="javascript:;" className={'active'}>首页</a></li>
                            <li><a href="javascript:;">关于我们</a></li>
                            <li><a href="javascript:;">最新活动</a></li>
                            <li><a href="javascript:;">企业用户</a></li>
                            <div className="clear"></div>
                        </ul>
                    </div>
                    <div className={'clear'}></div>
                </div>
            </header>
        );

    }

}

export default CommonHeader;