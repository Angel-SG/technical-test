import styled from "styled-components";

export const TabsUl = styled.ul`
    margin: 0;
    padding-left: 0;
    list-style: none;
    display: flex;
    top: 1px;
    position: relative;
`;

export const TabsLi = styled.li`
    padding: 15px 30px;
    background-color: #003573;
    color: #FFFFFF;
    font-weight: 600;
    margin-right: 5px;

    &.active {
        color: #003573;
        background-color: #FFFFFF;
        border-top: 1px solid lightgrey;
        border-right: 1px solid lightgrey;
        border-left: 1px solid lightgrey
    }
`;

export const TabsContentWrapper = styled.div`
    padding: 30px;
    border: 1px solid lightgrey;
`;

export const TabContent = styled.div`
    opacity: 0;
    display: none;

    &.active {
        opacity: 1;
        display: block;
    }
`;
