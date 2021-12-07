import cn from "classnames";
import Button from "../Common/Button";
import { RangeFilter } from "./RangeFilter";
import StatusFilter from "../Filter/StatusFilter";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordersActions } from "../../store/orders";
import { statusesActions } from "../../store/filters";
import { formatDateFilterValue } from "../../helpers/date";
import { datePicker } from "../../helpers/datePicker";
import { selectors } from "../../store/selectors/selectors";

const OTHER_STATUS = "Любой";

const buttonClassName =
  "filter-button filter-button_hidden-icon filter-button_short";

const FilterOptions = ({ isVisible }) => {
  const [dateStart, setDateStart] = useState("01.01.1900");
  const [dateEnd, setDateEnd] = useState("");

  const [sumStart, setSumStart] = useState(0);
  const [sumEnd, setSumEnd] = useState(Infinity);

  const statusData = useSelector(selectors.getCheckedStatuses);
  const statuses = String(statusData) ? statusData.join(", ") : OTHER_STATUS;

  const dispatch = useDispatch();

  datePicker("#dateStart");
  datePicker("#dateEnd", formatDateFilterValue(dateStart));

  const handleInputClear = (event) => {
    const currentInput = event.currentTarget.parentNode.children[0];
    currentInput.value = "";
    currentInput.name === "start" ? setDateStart("") : setDateEnd("");
  };

  const handleInputDateValue = (event) => {
    const InputName = event.target.name;
    InputName === "start"
      ? setDateStart(event.target.value)
      : setDateEnd(event.target.value);
  };

  const handleInputSumValue = (event) => {
    const InputName = event.target.name;
    const value = event.target.value;
    if (isFinite(value)) {
      InputName === "start" ? setSumStart(value) : setSumEnd(value);
    } else {
      alert("Введите числовое значение!");
    }
  };

  const setDateFilterOptions = (dateStart, dateEnd) => {
    const minDate = dateStart
      ? formatDateFilterValue(dateStart)
      : new Date(1900);
    const maxDate = dateEnd ? formatDateFilterValue(dateEnd) : Date.now();
    dispatch(ordersActions.filterOrdersByDate(minDate, maxDate));
  };

  const setSumFilterOptions = (sumStart, sumEnd) => {
    const minSum = sumStart ? sumStart : 0;
    const maxSum = sumEnd ? sumEnd : 1000000;
    dispatch(ordersActions.filterOrdersBySum(minSum, maxSum));
  };

  const setStatusFilterOptions = () => {
    dispatch(ordersActions.filterOrdersByStatus(statuses));
  };

  const formSubmit = () => {
    setDateFilterOptions(dateStart, dateEnd);
    setSumFilterOptions(sumStart, sumEnd);
    if (statuses !== OTHER_STATUS) {
      setStatusFilterOptions();
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    formSubmit();
  };

  const handleStatusFilterChange = (event) => {
    const value = event.target.name;
    dispatch(statusesActions.setStatuses(value));
  };

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter") {
        formSubmit();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  });

  return (
    <div className={cn("filter__wrapper", !isVisible && "filter__wrapper_hidden")}>
      <form
        className="filter__form"
        name="options"
        onSubmit={handleFormSubmit}
      >
        <RangeFilter
          filterTitle="Дата оформления"
          inputStartId="dateStart"
          InputEndId="dateEnd"
          onClick={handleInputClear}
          onBlur={handleInputDateValue}
          onChange={handleInputDateValue}
        >
          Дата оформления
        </RangeFilter>

        <StatusFilter
          statusValue={statuses}
          onChange={handleStatusFilterChange}
        >
          Статус заказа
        </StatusFilter>

        <RangeFilter
          filterPlaceholder="₽"
          isShort
          onChange={handleInputSumValue}
          onClick={handleInputClear}
        >
          Сумма заказа
        </RangeFilter>

        <Button className={buttonClassName} type="submit">
          Применить
        </Button>
      </form>
    </div>
  );
};

export default FilterOptions;
