import styled from "styled-components";

export const RadioWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    padding-bottom: 10px;
`;

export const Label = styled.label`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    z-index: 5;
    font-weight: 600;
    cursor: pointer;
    font-size: 20px;

    img {
        opacity: 0;
        height: 0;
        width: 0;
        visibility: none;
        z-index: -5;
        position: absolute;
        transition: opacity 0.3s;
    }
`;

export const RadioGroup = styled.div`
    position: relative;
    height: 56px;

    &:nth-child(2) {
        @media (max-width: 587px) {
            margin-right: 0;
            width: 50%;

            > input {
                margin-right: 0;
            }
        }
    }

    &:nth-child(4) {
        @media (max-width: 587px) {
            margin-right: 0;
            width: 50%;

            > input {
                margin-right: 0;
            }  
        }   
    }

    @media (max-width: 587px) {
        width: 47%;
        margin-right: 3%;
        margin-bottom: 3%;
    }

`;

export const RadioButton = styled.input.attrs({ type: 'radio' })`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    width: 116px;
    height: 56px;
    border: 1px solid grey;
    display: inline-block;
    background-color: #EAEDF3;
    margin: 0 8px 0 0;
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
            transform: translate(-82%,-50%);

            img {
                opacity: 1;
                display: inline;
                width: 25px;
                right: -31px;
                top: -2px;
                height: auto;
                visibility: initial;
            }
        }
    }

    @media (max-width: 587px) {
        width: 100%;
    }
`;

export const InputNumber = styled.input.attrs({type: 'number'})`
    height: 52px;
    border: 1px solid grey;
    margin-right: 8px;
    max-width: 150px;
    
    &::placeholder {
        padding-left: 5px;
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

