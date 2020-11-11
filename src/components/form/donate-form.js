import React, {useState} from 'react';
import {RadioWrapper, RadioButton, Label, RadioGroup,InputNumber, DonateButton, DonateParagraph, Paragraph} from './form-styles';
import secureImage from '../../assets/secure.svg';
import selectedImage from '../../assets/selected.svg';


const DonateForm = ({formType}) => {

    const [amount, setAmount] = useState(0);

    const firstAmount = () => {
        return formType === 1 ? 12 : 40;
    };

    const handleChange = (event) => {
        setAmount(event.target.value);
    }

    const formSubmit = () => {
        window.alert(`Thank you for donating £${amount === 0 ? firstAmount() : amount} to a good cause!`);
    }

    return(
       <form>
            <Paragraph>I would like to make a {formType === 1 ? "monthly" : 'one off'} donation of</Paragraph>
            
                {formType === 1 ? (
                    <RadioWrapper onChange={handleChange}>
                        <RadioGroup>
                            <RadioButton type="radio" value="6" name="amount"/>
                            <Label>&pound;6 <img src={selectedImage} alt="secure"/></Label>
                        </RadioGroup>
                        <RadioGroup>
                            <RadioButton type="radio" value="12" name="amount" defaultChecked/>
                            <Label>&pound;12 <img src={selectedImage} alt="secure"/></Label>
                        </RadioGroup>
                        <RadioGroup>
                            <RadioButton type="radio" value="18" name="amount"/>
                            <Label>&pound;18 <img src={selectedImage} alt="secure"/></Label>
                        </RadioGroup>
                        <RadioGroup>
                            <RadioButton type="radio" value="30" name="amount"/>
                            <Label>&pound;30 <img src={selectedImage} alt="secure"/></Label>
                        </RadioGroup>
                        <InputNumber type="number" placeholder="£ other amounts" onChange={handleChange}/>
                        <DonateButton onClick={formSubmit}>Donate &pound;{amount === 0 ? firstAmount() : amount} {formType === 1 ? "monthly" : 'today'} <img src={secureImage} alt="secure"/></DonateButton>
                    </RadioWrapper>
                ):(
                    <RadioWrapper onChange={handleChange}>
                        <RadioGroup>
                            <RadioButton type="radio" value="10" name="amount"/>
                            <Label>&pound;10 <img src={selectedImage} alt="secure"/></Label>
                        </RadioGroup>
                        <RadioGroup>
                            <RadioButton type="radio" value="40" name="amount" defaultChecked/>
                            <Label>&pound;40 <img src={selectedImage} alt="secure"/></Label>
                        </RadioGroup>
                        <RadioGroup>
                            <RadioButton type="radio" value="75" name="amount"/>
                            <Label>&pound;75 <img src={selectedImage} alt="secure"/></Label>
                        </RadioGroup>
                        <RadioGroup>
                            <RadioButton type="radio" value="100" name="amount"/>
                            <Label>&pound;100 <img src={selectedImage} alt="secure"/></Label>
                        </RadioGroup>
                        <InputNumber type="number" placeholder="£ other amounts" onChange={handleChange}/>
                        <DonateButton onClick={formSubmit}>Donate &pound;{amount === 0 ? firstAmount() : amount} {formType === 1 ? "monthly" : 'today'} <img src={secureImage} alt="secure"/></DonateButton>
                    </RadioWrapper>
                )}
               
            <DonateParagraph>&pound;{amount === 0 ? firstAmount() : amount} Could help answer an emergency call to our Animal Rescue Line</DonateParagraph>
            
       </form>
    )
}

export default DonateForm;