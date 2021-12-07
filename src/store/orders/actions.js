import { ordersActionTypes } from "./constants";

export const ordersActions = {
  setOrders: (payload) => ({
    type: ordersActionTypes.SET_ORDERS,
    payload,
  }),
  searchOrders: (payload) => ({
    type: ordersActionTypes.SEARCH_ORDERS,
    payload,
  }),
  changeOrderStatus: (payload) => ({
    type: ordersActionTypes.CHANGE_ORDER_STATUS,
    payload,
  }),
  changeOrderName: (payload) => ({
    type: ordersActionTypes.CHANGE_ORDER_NAME,
    payload,
  }),
  sortOrders: (payload) => ({
    type: ordersActionTypes.SORT_ORDERS,
    payload,
  }),
  deleteCheckedOrders: (payload) => ({
    type: ordersActionTypes.DELETE_CHECKED_ORDERS,
    payload,
  }),
  filterOrdersByDate: (minDate, maxDate) => ({
    type: ordersActionTypes.FILTER_ORDERS_BY_DATE,
    minDate,
    maxDate,
  }),
  filterOrdersBySum: (minSum, maxSum) => ({
    type: ordersActionTypes.FILTER_ORDERS_BY_SUM,
    minSum,
    maxSum,
  }),
  filterOrdersByStatus: (status) => ({
    type: ordersActionTypes.FILTER_ORDERS_BY_STATUS,
    status,
  }),
  filterOrders: (payload) => ({
    type: ordersActionTypes.FILTER_ORDERS,
    payload,
  }),
  changeGroupStatus: (payload, status) => ({
    type: ordersActionTypes.CHANGE_GROUP_STATUS,
    payload,
    status,
  }),
  resetOrders: () => ({
    type: ordersActionTypes.RESET_ORDERS
  })
};
