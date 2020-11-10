import React, {useState} from 'react';
import DonateForm from '../form/donate-form';
import {TabsUl, TabsLi, TabsContentWrapper, TabContent, Footer, FlexWrapper} from './tab-styles';
import DirectDebitImage from '../../assets/direct-debit-1-logo-png-transparent.png';
import FundraisingImage from '../../assets/fundraising-regulator-logo.png';
import PaypalImage from '../../assets/paypal-logo.png';
import VisaImage from '../../assets/visa-logo.png';
import mastercardImage from '../../assets/mastercard-logo.png';

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

                <Footer>
                    {tab === 1 ? (
                        <FlexWrapper>
                            <span onClick={()=>setTab(2)}>I would like to give once</span>
                            <p>All direct debits are protected by the Direct Debit Guarantee.</p>
                            <div>
                                <img src={DirectDebitImage} alt="Direct Debit"/>
                                <img src={FundraisingImage} alt="Fundraising regulator"/>
                            </div>
                        </FlexWrapper>
                        ) : (
                        <FlexWrapper>
                            <span onClick={()=>setTab(1)}>I would like to give monthly</span>
                            <div>
                                <img src={VisaImage} alt="Visa"/>
                                <img src={mastercardImage} alt="Mastercard"/>
                                <img src={PaypalImage} alt="Paypal"/>
                                <img src={FundraisingImage} alt="Fundraising regulator"/>
                            </div>
                        </FlexWrapper>        
                    )}
                </Footer>
            </TabsContentWrapper>
        </div>
    )
}

export default TabComponent;