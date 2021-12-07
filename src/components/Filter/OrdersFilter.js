import FilterPrimary from "./FilterPrimary";
import FilterOptions from "./FilterOptions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ordersActions } from "../../store/orders";
import { sortedActions, checkedOrdersActions, paginationActions } from "../../store/filters";
import { debounce } from "../../helpers/debounce";

export const OrdersFilter = ({ className = "filter" }) => {
  const [advencedVision, setAdvencedVision] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    const debouncedAction = debounce(() => {
      const currentValue = event.target.value;
      dispatch(ordersActions.searchOrders(currentValue.toLowerCase()));
    }, 750);
    debouncedAction();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleOptionsVisible = () => {
    setAdvencedVision(!advencedVision);
  };

  const resetFiltersHandler = () => {
    dispatch(ordersActions.resetOrders());
    setInputValue("");
    const fiterOptionsForm = document.forms["options"];
    const inputs = fiterOptionsForm.getElementsByTagName("input");
    for (let item of inputs) {
      item.value = "";
    }
    dispatch(sortedActions.refresh());
    dispatch(paginationActions.setCurrentPage(1));
    dispatch(checkedOrdersActions.clearCheckedOrders());
  };

  const handleButtonReset = () => {
    setInputValue("");
    dispatch(ordersActions.resetOrders());
  };

  return (
    <div className={className}>
      <FilterPrimary
        onChange={handleChange}
        onSubmit={handleSubmit}
        buttonFiltersHandler={handleOptionsVisible}
        resetFiltersHandler={resetFiltersHandler}
        onClick={handleButtonReset}
        value={inputValue}
      />
      <FilterOptions isVisible={advencedVision} />
    </div>
  );
};
