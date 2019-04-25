import React from 'react';

class CommonHeader extends React.Component {

    render() {
        return (
            <div className={'pageHeader'} id={'pageHeader'}>
                <div className="navigateBar">
                    <div className={'navigateTitle mr32 active'}>首页</div>
                    <div className={'navigateTitle mr32'}>关于我们</div>
                    <div className={'navigateTitle'}>最新活动</div>
                </div>
            </div>
        );
    }

}

export default CommonHeader;