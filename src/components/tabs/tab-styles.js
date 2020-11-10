import styled from "styled-components";

export const TabsUl = styled.ul`
    margin: 0;
    padding-left: 0;
    list-style: none;
    display: flex;
    top: 1px;
    position: relative;
    margin: 0 15px 0 15px;
`;

export const TabsLi = styled.li`
    padding: 15px 50px;
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

    @media (max-width: 587px) {
        padding: 15px;
        width: 48%;
        text-align: center;

        &:last-child {
            margin-right: 0;
        }
    }
`;

export const TabsContentWrapper = styled.div`
    border: 1px solid lightgrey;
    -webkit-box-shadow: 0px 0px 14px -1px rgba(200,200,200,0.82); 
    box-shadow: 0px 0px 14px -1px rgba(200,200,200,0.82);
    margin: 0 15px 0 15px;
`;

export const TabContent = styled.div`
    opacity: 0;
    display: none;
    padding: 30px 30px 20px 30px;

    &.active {
        opacity: 1;
        display: block;
    }

    @media (max-width: 587px) {
        padding: 30px 20px 15px 20px;
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

    @media (max-width: 995px) {
        flex-wrap: wrap;
        justify-content: center;

        p, span {
            text-align: center;
            width: 100%
        }

        img {
            order: 1;
            margin-bottom: 15px;
        }

        span {
            order: 3;
        }

        p {
            order: 2;
        }
    }


`;
