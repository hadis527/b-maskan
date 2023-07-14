
import styled from "styled-components";

export const DashboardWrapper = styled.div`
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width:${(props) => (props.width ? props.width+"%" : "100%")};
    margin-bottom :20px;
`;

export const TableContainer = styled.div`
    background-color:  ${props => props.theme.baseBackGroundColor};
    display:flex;
    width:100%;
    padding:50px;
    table {
    width :100%;
    font-size : ${(props) => (props.theme.fontSizeSm)};
    border-raduis :5px;

    }
    tr:nth-child(even) {
    background-color: ${(props) => props.theme.primaryLight};
    }
    tr:nth-child(odd) {
    background-color: #252a50;
    }
    td {
    text-align: center;
    padding: 10px 10px;
    color : #CCCCCC !important;
    font-family: ${(props) => (props.theme.fontDefault)} !important;
    }
    th {
    width : 300px;
    background-color: ${(props) => props.theme.primaryLight} !important;
    color :  ${(props) => props.theme.secondary} ;
    font-family: ${(props) => (props.theme.fontBold)} !important;
    padding: 10px 10px;
    }
    table ,th, td{
    border: 1px solid #606060 !important;
    border-collapse: collapse;
    }
    td a{
    color : #CCCCCC ;

    }

`;