import {
  GET_STOCK_INDICES,
  GET_INDEX_HISTORY
} from './const'

export const getStockIndices = (data) => ({
  type: GET_STOCK_INDICES,
  payload: data
});



