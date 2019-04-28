import React from 'react';

const style_1 = {
    width: '600px'
};

class AboutMain extends React.Component {

    render() {

        return (
            <div id={'about_main'} className={'about_main'}>
                <div id={'content'} className={'content'}>
                    <div id={'about-list'} className={'about-list'}>
                        <div className={'about-item model show'}>
                            <h2 className={'main-title'}>商业模式</h2>
                            <h3 className={'sub-title'}>专业咖啡新鲜式</h3>
                            <div className={'teletext'}>
                                <p className={'text'}>luckin coffee(瑞幸咖啡)中国新零售咖啡典型代表，致力于成为中国领先的高品质咖啡品牌和专业化的咖啡服务提供商。</p>
                                <p className={'text'}>luckin
                                    coffee以优选的产品原料、精湛的咖啡工艺，创新的商业模式，领先的移动互联网技术，努力为广大消费者带来更高品质的咖啡消费新体验，推动咖啡文化在中国的普及和发展。</p>
                                <div className={'image'}>
                                    <img src={'https://s2.luckincoffeecdn.com/luckywebrm/images/pimg/about/model.png'} />
                                </div>
                            </div>
                        </div>
                        <div className={'about-item brand'}>
                            <h2 className={'main-title'}>品牌主张</h2>
                            <div className={'teletext'}>
                                <p className={'text'}>luckin
                                    coffee相信一个崭新时代的源头永远始于改变，我们以高性价比改变咖啡消费观念，以规格原料与制程改变咖啡消费品质，以新零售模式改变咖啡消费体验。</p>
                                <p className={'text'}>luckin coffee面向职场和年轻一代消费者，鼓励他们充满自信，突破以往，勇于改变。</p>
                                <h3 className={'sub-title'}>改变，才能改变</h3>
                                <div className={'videobox'}>
                                    <video id={'videoplay'} style={style_1}>
                                        <source className={'mp4'} type="video/mp4" src="https://s2.luckincoffeecdn.com/luckywebrm/images/index/luckincoffee_TVC30.mp4" />
                                    </video>
                                    <a href="javascript:;" id={'play'}></a>
                                </div>
                                <p className={'text descript'}>△ 点击视频，观看汤唯和张震的广告大片</p>
                            </div>
                        </div>
                        <div className={'about-item contact'}>
                            <h2 className={'main-title'}>联系我们</h2>
                            <div className={'teletext'}>
                                <p className={'text tel'}>进场合作：4000-100-100（热线）</p>
                                <p className={'text icon mail'}><a href="mailto:hz@luckincoffee.com" target="_blank">hz@luckincoffee.com（邮箱）</a></p>
                                <p className={'text descript'}>为大型企业、中高端写字楼提供专业咖啡配套。欢迎各类咖啡厅转让。</p>
                                <p className={'text other'}>品牌联合：<a href="mailto:co-branding@luckincoffee.com" target="_blank">co-branding@luckincoffee.com</a></p>
                                <p className={'text other'}>媒体合作：<a href="mailto:pr@luckincoffee.com" target="_blank">pr@luckincoffee.com</a></p>
                                <p className={'text other'}>媒介资源：<a href="mailto:bmd-ad@luckincoffee.com" target="_blank">bmd-ad@luckincoffee.com</a></p>
                                <p className={'text other'}>采购招商：<a href="mailto:cg-zs@luckincoffee.com" target="_blank">cg-zs@luckincoffee.com</a></p>
                                <div className={'image'}>
                                    <img src={'https://s2.luckincoffeecdn.com/luckywebrm/images/pimg/about/contact.png'} />
                                </div>
                            </div>
                        </div>
                        <div className={'about-item statement'}>
                            <h2 className={'main-title'}>重要声明</h2>
                            <div className={'teletext'}>
                                <h2 className={'title'}>关于假冒我司商标非法招商加盟的声明</h2>
                                <div className={'content-wrapper'}>
                                    <p className={'content'}>近期，各类媒体平台上出现“luckin coffee瑞幸咖啡加盟”等虚假信息，以此进行非法招商加盟活动。</p>
                                    <p className={'content'}>对此，我司严正声明：“luckin coffee”、“瑞幸咖啡 ”均为我司注册商标；luckin
                                        coffee（瑞幸咖啡）为100% 直营，不接受任何形式的加盟；我司官方微博账户名称为“luckin coffee瑞幸咖啡”，微信公众号平台为“luckin
                                        coffee瑞幸咖啡”。 针对上述打着“瑞幸咖啡加盟”名义的非法活动，我司保留追究法律责任的权利。</p>
                                    <p className={'content'}>欢迎通过瑞幸咖啡官方微博、微信公众号后台举报上述非法活动，或拨打全国举报热线4000-100-100进行举报。</p>
                                    <div className={'mark'}>
                                        <p>luckin coffee瑞幸咖啡</p>
                                        <p>2019年4月11日</p>
                                    </div>
                                </div>
                                <div className={'foot-banner'}>
                                    <img src={'https://s2.luckincoffeecdn.com/luckywebrm/images/about/foot_banner.png'} />
                                </div>
                            </div>
                        </div>
                        <div className={'about-item joinus'}>
                            <h2 className={'main-title'}>加入我们</h2>
                            <div className={'teletext'}>
                                <p className={'text'}>luckin
                                    coffee不止于提供一杯高品质的新鲜咖啡，我们同时将互联网体验融入咖啡的消费流程，开创出全新的商业模式。加入我们，一起探索更多新鲜事。</p>
                                <div className={'image'}>
                                    <img src={'https://s2.luckincoffeecdn.com/luckywebrm/images/pimg/about/joinus.png'} />
                                    <div className={'qrcode'}></div>
                                </div>
                                <p className={'text descript'}>[ 扫一扫，查看更多职位 ]</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id={'side-left'} className={'side-left'}>
                    <ul className={'nav-list'}>
                        <li className={'nav'}><a href="javascript:;" className={'nav-item model active'}>商业模式</a></li>
                        <li className={'nav'}><a href="javascript:;" className={'nav-item brand'}>品牌主张</a></li>
                        <li className={'nav'}><a href="javascript:;" className={'nav-item contact'}>联系我们</a></li>
                        <li className={'nav'}><a href="javascript:;" className={'nav-item statement'}>重要声明</a></li>
                        <li className={'nav'}><a href="javascript:;" className={'nav-item joinus'}>加入我们</a></li>
                    </ul>
                    <div className={'joinus-window'}>
                        <div className={'joinus-title'}>招聘邮箱（总部）：</div>
                        <div className={'joinus-email'}>
                            <a href="mailto:zhaopin@luckincoffee.com" target="_blank">zhaopin@luckincoffee.com</a>
                        </div>
                        <div className={'joinus-image'}>
                            <div className={'qrcode'}></div>
                        </div>
                        <div className={'joinus-foot'}>[ 扫一扫，查看更多职位 ]</div>
                    </div>
                </div>
            </div>
        );

    }

}

export default AboutMain;