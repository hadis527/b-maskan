import {
    GET_STOCK_INDICES,
    GET_INDEX_HISTORY
} from './const';
const INIT_STATE = {
    stockIndicesList: [],
    indexHistory : []
};
export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_STOCK_INDICES:
            return {
                ...state,
                stockIndicesList: action.payload.indexB1
            }
        case GET_INDEX_HISTORY:
            return {
                ...state,
                indexHistory: action.payload.indexB2
            }
        default: return { ...state };
    }
}
