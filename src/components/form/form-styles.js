import styled from "styled-components";

export const RadioWrapper = styled.div`
    border: none;
    height: 67px;
    display: flex;
    &:focus {
        outline-color: transparent;
    }
`;

export const Label = styled.label`
    position: absolute;
    left: 50%;
    top: 42%;
    transform: translate(-50%,-50%);
    z-index: 5;
    font-weight: 600;
    cursor: pointer;
`;

export const RadioGroup = styled.div`
    position: relative;
`;

export const RadioButton = styled.input.attrs({ type: 'radio' })`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 116px;
    height: 50px;
    border: 1px solid grey;
    display: inline-block;
    background-color: #EAEDF3;
    margin-right: 5px;
    text-align: center;
    padding: 15px 0;
    font-size:18px;
    font-weight: 600;
    position: relative;
    cursor: pointer;

    &:focus {
        border: none;
        outline: transparent;
    }

    &:checked {
        background-color: #189CA0;
        border: 1px solid #189CA0;

        & + label {
            color: #FFFFFF;
        }
    }
`;

export const InputNumber = styled.input.attrs({type: 'number'})`
    height: 46px;
    margin-top: 3px;
    border: 1px solid grey;
    margin-right: 8px;
    max-width: 150px;

    &:focus {
        outline: transparent
    }
`;

export const DonateButton = styled.button`
    background-color: #F69220;
    min-width: 244px;
    font-size: 18px;
    font-weight: 600;
    height: 50px;
    margin-top: 3px;
    border: none;

    &:focus {
        outline: transparent;
    }
`;

export const DonateParagraph = styled.p`
    font-size: 20px;
    font-weight: 600px;
    background-color: #FACE9B;
    padding: 20px;
    position: relative;

    &:after {
        content: '';
        display: block;
        position: absolute;
        top: -10px;
        right: 100px;
        width: 0; 
        height: 0; 
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #FACE9B;
    }
`;

