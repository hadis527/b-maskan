import styled from "styled-components";

export const IndexHistoryWrapper = styled.div`
background-color:  ${props => props.theme.baseBackGroundColor};
    display:flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width:100vw;
    height:100vh;
    margin-bottom :20px;

 
     .highcharts-exporting-group {
       display : none;
     }
     .highcharts-title {
       fill : white !important;
       font-family: ${(props) => (props.theme.fontDefault)};
       font-size : ${(props) => (props.theme.fontSizeSm)} !important;
       }
       .highcharts-subtitle{
       display : none;
       }
       .highcharts-credits{
       display : none;
       }
       .highcharts-background{
         fill :#252853;
       }
     .highcharts-axis-title , .highcharts-data-label{
       font-family: ${(props) => (props.theme.fontDefault)};
     
     }
     .highcharts-axis text {
       fill : #efefef !important;
     
     }
     
       .highcharts-legend-item text{
         fill : #CCCCCC !important;
         font-family: ${(props) => (props.theme.fontDefault)};
         font-size : ${(props) => (props.theme.fontSizeXs)};
         font-weight : normal !important;
        }
        .highcharts-axis-labels text{
         fill : #CCCCCC !important;
         font-family: ${(props) => (props.theme.fontDefault)};
         font-size : ${(props) => (props.theme.fontSizeXs)};
        }
        .font-weight-bold td{
            font-weight : bold !important;
            color : #5e968b !important;
        }
        .highcharts-text-outline{
            display : none;
        }
        .highcharts-data-label text{
            fill : #CCCCCC !important;
            font-family: ${(props) => (props.theme.fontDefault)};
            font-size : ${(props) => (props.theme.fontSizeXs)};
            font-weight: normal !important;
        }
        .linear-gauge .highcharts-data-label text{
         fill : #414141 !important;
        }
`;

export const ChartContainer = styled.div`

  width:100%;
  padding:50px;
  background-color:  ${props => props.theme.baseBackGroundColor};
 .highcharts-container{
   width:100%;
 }
`;

