import React from 'react';

class Item_1 extends React.Component {

    render() {

        return (
            <div className={'favorContent'}>
                <div className={'QRCodeContent'}>
                    <img src={'https://s1.luckincoffeecdn.com/luckywaprm/media/QRcode.f010143f.png'} className={'QRCode'} />
                    <div className={'weChatMsgCH'}>
                        <div>关注微信</div>
                        <div>与幸运打个招呼</div>
                    </div>
                    <div className={'weChatMsgEN'}>
                        <div>Follow our WeChat</div>
                        <div>and good luck!</div>
                    </div>
                </div>
            </div>
        );

    }

}

export default Item_1;