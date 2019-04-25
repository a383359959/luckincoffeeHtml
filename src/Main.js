import React from 'react';

import Banner from './Banner';
import Item_1 from './Item_1';
import Item_2 from './Item_2';
import Item_3 from './Item_3';
import Item_4 from './Item_4';
import Item_5 from './Item_5';
import Item_6 from './Item_6';

const style_1 = {
    paddingTop: '60px'
}

class Main extends React.Component {

    componentDidMount() {

        const clientHeight = window.innerHeight - 60;
        document.getElementById('cover').style.height = clientHeight + 'px';

    }

    render() {

        return (
            <div id={'main'} className={'main'} style={style_1}>
                <ul id={'animate-wrap'}>
                    <li id={'cover'} className={'animate-item'}>
                        <Banner />
                    </li>
                    <Item_1 />
                    <Item_2 />
                    <Item_3 />
                    <Item_4 />
                    <Item_5 />
                    <Item_6 />
                </ul>
            </div>
        );

    }

}

export default Main;