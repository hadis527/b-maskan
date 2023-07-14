
import React from 'react';
import { DashboardWrapper, TableContainer } from "./styles"
import { Link } from "react-router-dom";

const Dashboard = ({tableHead,stockIndicesList}) => {
  return (
    <DashboardWrapper >
      <TableContainer>
        <table >
          <tr>
            {tableHead.map((item, index) => <th key={index} align="center">
              {item}
            </th>)}
          </tr>
          {
            stockIndicesList.map((each, index) => {
              return (
                <tr>
                  <td align="center">{each.insCode}</td>
                  <td key={index} align="center">
                  <Link to={{pathname:'/history/'+each.insCode, state: { id:each.insCode}}} >
                      {each.lVal30}
                   </Link>
                  </td>
                </tr>
              )
            })
          }
        </table>
      </TableContainer>
    </DashboardWrapper>
  );
};

export default Dashboard;
