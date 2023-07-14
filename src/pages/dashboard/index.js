
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getStockIndices,
} from '../../redux/stock/actions';
import Axios from 'axios';
import DashboardView from "../../view/dashboard"
const Dashboard = () => {
  const dispatch = useDispatch();
  const stockState = useSelector(state => state.Stock);
  const { stockIndicesList } = stockState;

  useEffect(() => {
    getStockIndicesList();
  }, []);

  const tableHead = ["شناسه شاخص", "عنوان شاخص"]
  const getStockIndicesList = () => {
    Axios({
      method: 'get',
      url: `http://cdn.tsetmc.com/api/Index/GetIndexB1LastAll/All/1`,
      headers: {
        Authorization: `Bearer`,
        'content-type': 'application/json',
      },
    })
      .then(res => {
        dispatch(getStockIndices(res.data));
      })
      .catch(err => {
        console.log(err);
      });
  };

 
  return (
    <DashboardView
     stockIndicesList={stockIndicesList} 
     tableHead={tableHead}
     />
  );
};

export default Dashboard;
