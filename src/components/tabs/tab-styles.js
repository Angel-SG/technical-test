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
    cursor: pointer;

    &.active {
        color: #003573;
        background-color: #FFFFFF;
        border-top: 1px solid lightgrey;
        border-right: 1px solid lightgrey;
        border-left: 1px solid lightgrey
    }
`;

export const TabsContentWrapper = styled.div`
    
    border: 1px solid lightgrey;
`;

export const TabContent = styled.div`
    opacity: 0;
    display: none;
    padding: 30px 30px 20px 30px;

    &.active {
        opacity: 1;
        display: block;
    }
`;

export const Footer = styled.div`
    background-color: #EAEDF3;
    padding: 30px;
`;

export const FlexWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;

    span {
        text-decoration: underline;
        line-height: 32px;
        cursor: pointer;
    }

    p {
        font-size: 12px;
    }

    img {
        margin-right: 15px;

        &:last-child {
            margin-right: 0;
        }
    }


`;
