export const getOrders = (state) => state.orders;
export const getCheckedOrders = (state) => state.filters.checkedOrders;
export const getSortedPositions = (state) => state.filters.sortItems;
export const pagination = (state) => state.filters.pagination;
export const getCurrentPage = (state) => state.filters.pagination.currentPage;
export const getItemsPerPage = (state) => state.filters.pagination.itemsCountPerPage;
export const getMaxPage = (state) =>
  Math.ceil(getOrders(state).length / pagination(state).itemsCountPerPage);

export const getOrdersList = (state) => {
  const orderList = getOrders(state);
  const start = (getCurrentPage(state) - 1) * getItemsPerPage(state);
  const end = getItemsPerPage(state) * getCurrentPage(state) - 1;
  const result = orderList.filter(
    (order) =>
      orderList.indexOf(order) >= start && orderList.indexOf(order) <= end
  );
  return result;
};

export const getFormOrder = (state) => state.form.order;
export const getFormVisible = (state) => state.form.isVisible;

export const getCheckedStatuses = (state) => state.filters.statuses;

export * as selectors from "./selectors";
