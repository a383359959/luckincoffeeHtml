import React from 'react';
import $ from 'jquery';

import CommonHeader from './CommonHeader';
import CommonFooter from './CommonFooter';

class About extends React.Component {

    componentDidMount() {
        let _this = this;
        let content = new Array();
        content[0] = '<div class="titleBar"><div class="colorBar"></div><div>商业模式</div></div><div class="secondTitle">专业咖啡新模式</div><div class="contentBar"><div>luckin coffee(瑞幸咖啡)中国新零售咖啡典型代表，致力于成为中国领先的高品质咖啡品牌和专业化的咖啡服务提供商。 &nbsp;&nbsp;&nbsp;&nbsp;</div><div>luckin coffee以优选的产品原料、精湛的咖啡工艺，创新的商业模式，领先的移动互联网技术， 努力为广大消费者带来更高品质的咖啡消费新体验，推动咖啡文化在中国的普及和发展。</div></div><div class="adBar"></div>';
        content[1] = '<div class="titleBar"><div class="colorBar"></div><div>品牌主张</div></div><div class="contentBar"><div>luckin coffee相信一个崭新时代的源头永远始于改变，我们以高性价比改变咖啡消费观念， 以规格原料与制程改变咖啡消费品质，以新零售模式改变咖啡消费体验。</div><div>luckin coffee面向职场和年轻一代消费者，鼓励他们充满自信，突破以往，勇于改变。</div></div><div class="bottomTitle">改变，才能改变</div><div class="movieBar"><div class="movieBackground"></div></div>';
        content[2] = '<div class="titleBar"><div class="colorBar"></div><div>联系我们</div></div><div class="cooperationInfo"><div class="cooperationTel"><div class="left-size">进场合作：</div><div class="right-size">4000-100-100（热线）</div></div><div class="cooperationEmail"><div class="left-size"></div><div class="right-size">hz@luckincoffee.com（邮箱）</div></div><div class="cooperationTip">为大型企业、中高端写字楼提供专业咖啡配套。欢迎各类咖啡厅转让。</div><div class="cooperationBrand"><div class="left-size">品牌联合：</div><div class="right-size">co-branding@luckincoffee.com</div></div><div class="cooperationMedia"><div class="left-size">媒体合作：</div><div class="right-size">pr@luckincoffee.com</div></div><div class="cooperationMedium"><div class="left-size">媒介资源：</div><div class="right-size">bmd-ad@luckincoffee.com</div></div><div class="cooperationPurchase"><div class="left-size">采购招商：</div><div class="right-size">cg-zs@luckincoffee.com</div></div></div><div class="adBar"></div>';
        content[3] = '<div class="titleBar"><div class="colorBar"></div><div>重要声明</div></div><div class="contentBar"><div class="statement-title">关于假冒我司商标非法招商加盟的声明</div><div class="statement-content"><p>近期，各类媒体平台上出现“luckin coffee瑞幸咖啡加盟”等虚假信息，以此进行非法招商加盟活动。</p><p>对此，我司严正声明：“luckin coffee”、“瑞幸咖啡 ”均为我司注册商标；luckin coffee（瑞幸咖啡）为100% 直营，不接受任何形式的加盟；我司官方微博账户名称为“luckin coffee瑞幸咖啡”，微信公众号平台为“luckin coffee瑞幸咖啡”。 针对上述打着“瑞幸咖啡加盟”名义的非法活动，我司保留追究法律责任的权利。</p><p>欢迎通过瑞幸咖啡官方微博、微信公众号后台举报上述非法活动，或拨打全国举报热线4000-100-100进行举报。 </p><div class="mark"><p>luckin coffee瑞幸咖啡</p><p>2019年4月11日</p></div></div></div>';
        content[4] = '<div class="titleBar"><div class="colorBar"></div><div>加入我们</div></div><div class="contentBar"><div>luckin coffee不止于提供一杯高品质的新鲜咖啡，我们同时将互联网体验融入咖啡的消费流程，开创出全新的商业模式。 加入我们，一起探索更多新鲜事。</div></div><div class="adBar"></div><div class="moreJob">查看更多职位&nbsp;&nbsp;&gt;</div>';
        $('.aboutUsContent').html(content[0]);
        $('.navigateBar div').bind('click', function(){
            let index = $(this).index();
            $('.navigateBar div').removeClass('active');
            $(this).addClass('active');
            $('.aboutUsContent').html(content[index]);
        });
    }

    render() {

        return (
            <div data-reactroot className={'wrapper'}>
                <div className={'indexPage aboutUsPage'}>
                    <CommonHeader />
                    <div className={'aboutUsBody'}>
                        <div className={'banner'}></div>
                        <div className={'navigateBar'}>
                            <div className={'active'}>商业模式</div>
                            <div>品牌主张</div>
                            <div>联系我们</div>
                            <div>重要声明</div>
                            <div>加入我们</div>
                        </div>
                        <div className={'aboutUsDetail'}>
                            <div className={'aboutUsContent'}></div>
                        </div>
                    </div>
                    <CommonFooter />
                </div>
            </div>
        );

    }

}

export default About;