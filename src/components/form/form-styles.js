import styled from "styled-components";

export const Select = styled.select`
    border: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    height: 67px;

    &:focus {
        outline-color: transparent;
    }
`;

export const Option = styled.option`
    width: 116px;
    border: 1px solid grey;
    display: inline-block;
    background-color: #EAEDF3;
    margin-right: 5px;
    text-align: center;
    padding: 15px 0;
    font-size:18px;
    font-weight: 600;

    &:checked {
        background-color: #189CA0;
        color: white !important;
    }
`;
