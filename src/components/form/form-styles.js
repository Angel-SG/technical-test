import styled from "styled-components";

export const RadioWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding-bottom: 10px;

`;

export const Paragraph = styled.p`
    font-weight: 500;
`;

export const Label = styled.label`
    z-index: 5;
    line-height: 58px;

    font-size: 20px;
    font-weight: 600;
    cursor: pointer;


    &:focus {
        border: none;
        outline: transparent;
    }

    &.is-active {
        color: #ffffff;
        border: 1px solid red;
    }

    img {
        opacity: 0;
        height: 0;
        width: 0;
        z-index: -5;
        position: relative;
        transition: opacity 0.3s;
    }

    p {
        display: none;
        line-height: 58px;
        font-size: 20px;
        font-weight: 600;
    }
`;

export const RadioGroup = styled.div`
    position: relative;
    height: 56px;
    margin: 0 8px 0 0;
    width: 116px;
    height: 56px;
    display: inline-block;
    background-color: #EAEDF3;
    text-align: center;
    cursor: pointer;

    &:nth-child(2) {
        @media (max-width: 587px) {
            margin-right: 0;
            width: 48%;
            margin-left: 1%;

            > input {
                margin-right: 0;
            }
        }
    }

    &:nth-child(4) {
        @media (max-width: 587px) {
            margin-right: 0;
            width: 48%;
            margin-left: 1%;

            > input {
                margin-right: 0;
            }  
        }   
    }

    @media (max-width: 587px) {
        width: 48%;
        margin-right: 1%;
        margin-bottom: 3%;
    }

`;

export const RadioButton = styled.input.attrs({ type: 'radio' })`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    z-index: 0;
    cursor: pointer;
    display: inline-block;
    border: 1px solid grey;

    &:focus {
        border: none;
        outline: transparent;
    }

    &:checked {
        background-color: #189CA0;
        border: 1px solid #189CA0;

        & + img {

            opacity: 1;
            display: inline;
            width: 25px;
            top: 4px;
            height: auto;
            z-index: 10;
            visibility: initial;

            & + p {
                display: block;
                color: white;
                position: absolute;
                left: 37%;
                top: 16%;
                transform: translate(-50%,-50%);
             }
            
        }

       
    }

    @media (max-width: 587px) {
        width: 100%;
    }
`;

export const InputNumber = styled.input.attrs({type: 'number'})`
    height: 54px;
    border: 1px solid grey;
    margin-right: 8px;
    max-width: 150px;
    padding-left: 15px;
    
    &::placeholder {
        font-size: 16px;
        font-weight: 600;
        color: #000000
    }

    @media (max-width: 751px) {
        margin-top: 15px;
    }

    @media (max-width: 587px) {
        margin-top: 0;
        width: 100%;
        max-width: initial;
        margin-right: 0;
    }

    &:focus {
        outline: transparent
    }
`;

export const DonateButton = styled.button`
    background-color: #F69220;
    min-width: 244px;
    font-size: 18px;
    font-weight: 600;
    height: 56px;
    border: none;
    cursor: pointer;

    @media (max-width: 995px) {
        margin-top: 15px;
    }

    @media (max-width: 587px) {
        margin-top: 10px;
        width: 100%;
    }

    &:focus {
        outline: transparent;
    }
`;

export const DonateParagraph = styled.p`
    font-size: 20px;
    font-weight: 600;
    background-color: #FACE9B;
    padding: 20px;
    position: relative;

    @media (max-width: 587px) {
        font-size: 16px;
        text-align: center;
    }

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

        @media (max-width: 995px) {
            left: 100px;
        }

        @media (max-width: 730px) {
            left: 40%;
        }

        @media (max-width: 587px) {
            left: 50%;
        }
    }
`;

