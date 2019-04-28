import React from 'react';

import CommonHeader from './CommonHeader';
import Banner from './Banner';
import CommonFooter from './CommonFooter';
import Item_1 from './Item_1';
import Item_2 from './Item_2';
import Item_3 from './Item_3';
import Item_4 from './Item_4';
import Item_5 from './Item_5';

class Index extends React.Component {

    render() {
       return (
           <div data-reactroot className={'wrapper'}>
               <div className={'indexPage'}>
                   <CommonHeader />
                   <div className={'indexBody'}>
                       <Banner />
                       <div className={'favorBar'}></div>
                       <Item_1 />
                       <Item_2 />
                       <Item_3 />
                       <Item_4 />
                       <Item_5 />
                   </div>
                   <CommonFooter />
               </div>
           </div>
       )
    }

}

export default Index;