import { checkedOrdersActionTypes, paginationActionTypes, sortedActionTypes, statusesActionTypes } from "./constants";

export const checkedOrdersActions = {
    setCheckedOrders: (id) => ({
        type: checkedOrdersActionTypes.SET_CHECKED_ORDERS,
        id,
    }),
    deleteCheckedOrders: (payload) => ({
        type: checkedOrdersActionTypes.DELETE_CHECKED_ORDERS,
        payload,
    }),
    clearCheckedOrders: () => ({
        type: checkedOrdersActionTypes.CLEAR_CHECKED_ORDERS,
    }),
    setAllCheckedOrders: (payload) => ({
        type: checkedOrdersActionTypes.SET_ALL_CHECKED_ORDERS,
        payload,
    }),
};

export const paginationActions = {
    setCurrentPage: (page) => ({
        type: paginationActionTypes.SET_CURRENT_PAGE,
        page,
    }),
};

export const sortedActions = {
    sorted: (payload) => ({
        type: sortedActionTypes.SORTED,
        payload,
    }),
    refresh: () => ({
        type: sortedActionTypes.REFRESH,
    }),
};

export const statusesActions = {
    setStatuses: (status) => ({
      type: statusesActionTypes.SET_STATUSES,
      status,
    }),
    clearStatuses: () => ({
      type: statusesActionTypes.CLEAR_STATUSES,
    }),
  };