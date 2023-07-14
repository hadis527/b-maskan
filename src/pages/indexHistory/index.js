import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import IndexHistoryView from "../../view/indexHistory";
import { useDispatch, useSelector } from 'react-redux';
import {
    getIndexHistory
} from '../../redux/stock/actions';
import Axios from 'axios';

const IndexHistory = () => {
    const params = useParams();
    const { id } = params;
    const dispatch = useDispatch();
    const stockState = useSelector(state => state.Stock);
    const { indexHistory } = stockState;

    useEffect(() => {
        getHistory(id);
    }, []);

    const getHistory = (code) => {
        Axios({
            method: 'get',
            url: `http://cdn.tsetmc.com/api/Index/GetIndexB2History/${code} `,
            headers: {
                Authorization: `Bearer`,
                'content-type': 'application/json',
            },
        })
            .then(res => {
                dispatch(getIndexHistory(res.data));
            })
            .catch(err => {
                console.log(err);
            });
    }

    return (
        <IndexHistoryView
            data={indexHistory}
        />

    )
}
export default IndexHistory;