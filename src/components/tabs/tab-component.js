import React, {useState} from 'react';
import DonateForm from '../form/donate-form';
import {TabsUl, TabsLi, TabsContentWrapper, TabContent} from './tab-styles';

const TabComponent = () => {

    const [tab, setTab] = useState(1);

    return(
        <div>
            <TabsUl>
                <TabsLi onClick={()=>setTab(1)} className={tab === 1 ? 'tab-li active' : 'tab-li'}>Donate monthly</TabsLi>
                <TabsLi onClick={()=>setTab(2)} className={tab === 2 ? 'tab-li active' : 'tab-li'}>Donate once</TabsLi>
            </TabsUl>
    
            <TabsContentWrapper>
                <TabContent className={tab === 1 ? 'tab-item active' : 'tab-item'}>
                    <DonateForm formType={tab} setTab={setTab} />
                </TabContent>
                <TabContent className={tab === 2 ? 'tab-item active' : 'tab-item'}>
                    <DonateForm formType={tab} setTab={setTab}/>
                </TabContent>
            </TabsContentWrapper>
        </div>
    )
}

export default TabComponent;