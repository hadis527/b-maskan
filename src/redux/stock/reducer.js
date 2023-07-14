import {
    GET_STOCK_INDICES,
} from './const';
const INIT_STATE = {
    stockIndicesList: [],
};
export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_STOCK_INDICES:
            return {
                ...state,
                stockIndicesList: action.payload.indexB1
            }
        default: return { ...state };
    }
}
