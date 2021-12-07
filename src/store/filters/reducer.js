import { checkedOrdersActionTypes, paginationActionTypes, sortedActionTypes, statusesActionTypes } from './constants';

const initialState = {
    checkedOrders: [],
    sortItems: {
        creationDate: false,
        status: false,
        positionsCount: false,
        sum: false,
    },
    statuses: [],
    pagination: {
        currentPage: 1,
        itemsCountPerPage: 10,
    }
};

export const filtersReducer = (state = initialState, action) => {
    switch (action.type) {
        case checkedOrdersActionTypes.SET_CHECKED_ORDERS:
            return { ...state, checkedOrders: [...state.checkedOrders, ...action.id] };
        case checkedOrdersActionTypes.DELETE_CHECKED_ORDERS:
            return { ...state, checkedOrders: state.checkedOrders.filter((item) => !action.payload.includes(item)) };
        case checkedOrdersActionTypes.CLEAR_CHECKED_ORDERS:
            return { ...state, checkedOrders: initialState.checkedOrders };
        case checkedOrdersActionTypes.SET_ALL_CHECKED_ORDERS:
            return { ...state, checkedOrders: [...state.checkedOrders, ...action.payload] };
        case paginationActionTypes.SET_CURRENT_PAGE:
            const result =
                action.page === state.pagination.currentPage && action.page > 1
                    ? { ...state, pagination: { ...state.pagination, currentPage: action.page - 1 } }
                    : { ...state, pagination: { ...state.pagination, currentPage: action.page } };
            return result;
        case sortedActionTypes.SORTED:
            const value = action.payload;
            return { ...state, sortItems: { ...state.sortItems, [value]: !state.sortItems[value] } };
        case sortedActionTypes.REFRESH:
            return {
                ...state,
                sortItems: initialState.sortItems
            };
        case statusesActionTypes.SET_STATUSES: {
            const status = action.status;
            const result = state.statuses.includes(status)
                ? state.statuses.filter((item) => item !== status)
                : [...state.statuses, action.status];
            return { ...state, statuses: result };
        }
        case statusesActionTypes.CLEAR_STATUSES:
            return { ...state, statuses: initialState.statuses };
        default:
            return state;
    }
};