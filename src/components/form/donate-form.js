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

    const monthlyForm = [
        { value: 6, label: 6},
        { value: 12, label: 12},
        { value: 18, label: 18},
        { value: 30, label: 30},
    ];

    const OnceForm = [
        { value: 10, label: 10},
        { value: 40, label: 40},
        { value: 75, label: 75},
        { value: 100, label: 100},
    ]

    return(
       <form>
            <Paragraph>I would like to make a {formType === 1 ? "monthly" : 'one off'} donation of</Paragraph>
            
                {formType === 1 ? (
                    <RadioWrapper>
                        {monthlyForm.map((item) => 
                         
                            <RadioGroup key={item.value} onChange={handleChange}>
                                <Label htmlFor={`element-${item.value}`}> 
                                    &pound;{item.label} 
                                   
                                    <RadioButton 
                                        label={item.label}
                                        type="radio" 
                                        value={item.value} 
                                        name="amount" 
                                        id={`element-${item.value}`} 
                                        defaultChecked={item.value === 12 ? 'checked' : null} 
                                    />
                                    <img src={selectedImage} alt="secure"/>
                                    <p>&pound;{item.label}</p>
                                </Label>
                            </RadioGroup>
                
                        )}
                       
                        <InputNumber type="number" placeholder="£ other amounts" onChange={handleChange}/>
                        <DonateButton onClick={formSubmit}>Donate &pound;{amount === 0 ? firstAmount() : amount} {formType === 1 ? "monthly" : 'today'} <img src={secureImage} alt="secure"/></DonateButton>
                    </RadioWrapper>
                ):(
                    <RadioWrapper>

                        {OnceForm.map((item) => 
                         
                            <RadioGroup key={item.value} onChange={handleChange}>
                                <Label htmlFor={`element-${item.value}`}> 
                                    &pound;{item.label} 
                                    
                                    <RadioButton 
                                        label={item.label}
                                        type="radio" 
                                        value={item.value} 
                                        name="amount" 
                                        id={`element-${item.value}`} 
                                        defaultChecked={item.value === 40 ? 'checked' : null} 
                                    />
                                    <img src={selectedImage} alt="secure"/>
                                    <p>&pound;{item.label}</p>

                                </Label>
                            </RadioGroup>
                
                        )}
                    
                        <InputNumber type="number" placeholder="£ other amounts" onChange={handleChange}/>
                        <DonateButton onClick={formSubmit}>Donate &pound;{amount === 0 ? firstAmount() : amount} {formType === 1 ? "monthly" : 'today'} <img src={secureImage} alt="secure"/></DonateButton>
                    </RadioWrapper>
                )}
               
            <DonateParagraph>&pound;{amount === 0 ? firstAmount() : amount} Could help answer an emergency call to our Animal Rescue Line</DonateParagraph>
            
       </form>
    )
}

export default DonateForm;