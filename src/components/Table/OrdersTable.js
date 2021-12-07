import TableHeader from "./TableHeader";
import { TableOrdersList } from "./TableOrdersList";
import { TableFooter } from "./TableFooter";
import { useDispatch, useSelector } from "react-redux";
import { ordersActions } from "../../store/orders";
import { formActions } from "../../store/modalForm";
import { useState } from "react";
import { FooterActions } from "../Footer/FooterActions";
import { FooterPagination } from "../Footer/FooterPagination";
import { sortedActions, checkedOrdersActions, paginationActions } from "../../store/filters";
import { selectors } from "../../store/selectors/selectors";

export const OrdersTable = () => {
  const [isUp, setIsUp] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dispatch = useDispatch();

  const sortedPosition = useSelector(selectors.getSortedPositions);
  const maxNumberOfPage = useSelector(selectors.getMaxPage);
  const currentPage = useSelector(selectors.getCurrentPage);
  const ordersList = useSelector(selectors.getOrdersList);
  const checkedOrders = useSelector(selectors.getCheckedOrders);

  const handleFilterSort = (name) => {
    dispatch(
      ordersActions.sortOrders({
        value: name,
        SortUp: isUp,
      })
    );
    setIsUp(!isUp);
    dispatch(sortedActions.sorted(name));
  };

  const handleCheckbox = (event) => {
    const checkedId = Number(event.target.name);
    const CheckboxIsChecked = event.target.checked;
    if (CheckboxIsChecked) {
      dispatch(checkedOrdersActions.setCheckedOrders([checkedId]));
    } else {
      dispatch(checkedOrdersActions.deleteCheckedOrders([checkedId]));
    }
  };

  const handleRowClick = (event) => {
    const orderId = Number(event.currentTarget.getAttribute("name"));
    const orderToSetFormData = ordersList.find((item) => item.id === orderId);
    dispatch(formActions.setOrder(orderToSetFormData));
    dispatch(formActions.setVisible());
  };

  const handleCheckboxHeader = (event) => {
    const isCheckboxChecked = event.target.checked;
    const allId = ordersList.map((order) => order.id);
    dispatch(checkedOrdersActions.clearCheckedOrders());

    isCheckboxChecked
      ? dispatch(checkedOrdersActions.setAllCheckedOrders(allId))
      : dispatch(checkedOrdersActions.clearCheckedOrders());
  };

  const handlePageChange = (page) => {
    dispatch(paginationActions.setCurrentPage(page));
  };

  const handleClickLast = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handlePageDropdownSubmit = (event) => {
    const targetPage = event.target.page.value;
    if (
      isFinite(targetPage) &&
      targetPage <= maxNumberOfPage &&
      targetPage > 0
    ) {
      dispatch(paginationActions.setCurrentPage(targetPage));
      setIsDropdownOpen(!isDropdownOpen);
      event.target.page.value = "";
    }
  };

  return (
    <div className="table">
      <TableHeader
        onClick={handleFilterSort}
        onChangeCheckbox={handleCheckboxHeader}
        iconRotate={sortedPosition}
      />
      <TableOrdersList
        orders={ordersList}
        onClick={handleRowClick}
        onChange={handleCheckbox}
        CheckedId={checkedOrders}
      />
      <TableFooter>
        <FooterActions />
        <FooterPagination
          onClick={handlePageChange}
          page={currentPage}
          maxPage={maxNumberOfPage}
          onClickLast={handleClickLast}
          onSubmit={handlePageDropdownSubmit}
          isVisible={isDropdownOpen}
        />
      </TableFooter>
    </div>
  );
};
