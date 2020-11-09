import React, {useState} from 'react';
import {Select, Option} from './form-styles';
import poundImage from '../../assets/pound.svg'

const DonateForm = ({formType, setTab}) => {

    const [amount, setAmount] = useState(0);

    const firstAmount = () => {
        return formType === 1 ? 12 : 40;
    };

    const handleChange = (e) => {
        setAmount(e.target.value);
      
    }

    const formSubmit = () => {
        window.alert(`Thank you for donating ${amount === 0 ? firstAmount() : amount} to a good cause!`);
    }

    return(
       <form>
            <p>I would like to make a {formType === 1 ? "monthly" : 'one off'} donation of</p>
            <Select size="4" defaultValue={formType === 1 ? 12 : 40} onChange={handleChange}>
                {formType === 1 ? (
                    <>
                     <Option value="6">£6</Option>
                     <Option value="12">£12</Option>
                     <Option value="18">£18</Option>
                     <Option value="30">£30</Option>
                    </>
                ):(
                    <>
                    <Option value="10">£10</Option>
                    <Option value="40">£40</Option>
                    <Option value="75">£75</Option>
                    <Option value="100">£100</Option>
                   </>
                )}
               
            </Select>
            
            <input type="number" placeholder="other amounts" onChange={handleChange}/>
            <button onClick={formSubmit}>Donate {formType === 1 ? "monthly" : 'today'}</button>
            <p>£{amount === 0 ? firstAmount() : amount} Could help answer an emergency call to our Animal Rescue Line</p>

            {formType === 1 ? (
                <span onClick={()=>setTab(2)}>I would like to give once</span>
            ) : (
                <span onClick={()=>setTab(1)}>I would like to give monthly</span>
            )}
       </form>
    )
}

export default DonateForm;