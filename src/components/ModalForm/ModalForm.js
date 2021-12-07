import cn from "classnames";
import modalForm from "./css/ModalForm.module.css";
import { useState } from "react";
import FormFooter from "./FormFooter";
import FormHeader from "./FormHeader";
import FormInput from "./FormInput";
import OrderTable from "./OrderTable";
import { useDispatch, useSelector } from "react-redux";
import { formActions } from "../../store/modalForm";
import { ordersActions } from "../../store/orders";
import FormDropdown from "./FormDropdown";
import StatusDropdown from "./StatusDropdown";
import { formatDate } from "../../helpers/date";
import { selectors } from "../../store/selectors/selectors";

const ModalForm = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [formIsChanged, setFormIsChanged] = useState(false);
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);

  const dispatch = useDispatch();
  const isFormVisible = useSelector(selectors.getFormVisible);
  const formData = useSelector(selectors.getFormOrder);

  const order = { ...formData }

  const handleDropdownStatusOpen = (event) => {
    event.preventDefault();
    setIsStatusDropdownOpen(!isStatusDropdownOpen);
  };

  const handleFormClose = (event) => {
    event.preventDefault();
    setIsDropdownOpen(!isDropdownOpen);
    setFormIsChanged(false);
    dispatch(formActions.setVisible());
  };

  const handleDropdownOpen = (event) => {
    event.preventDefault();
    if (formIsChanged) {
      setIsDropdownOpen(!isDropdownOpen);
    } else {
      dispatch(formActions.setVisible());
    }
  };

  const handleSaveButton = (event) => {
    event.preventDefault();
    dispatch(formActions.setVisible());
    dispatch(ordersActions.changeOrderStatus(order));
    dispatch(ordersActions.changeOrderName(order));
    dispatch(formActions.clearOrder());
    setIsStatusDropdownOpen(false);
    setFormIsChanged(false);
  };

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setFormIsChanged(true);
    dispatch(formActions.setOrder({ ...order, [name]: value }));
  };

  const handleFormVisible = (event) => {
    const style = event.target.className;
    event.target.className = style + " " + modalForm.moveRight;
    setTimeout(() => dispatch(formActions.setVisible()), 400);
  };

  clearTimeout(handleFormVisible);

  return (
    <>
      <div className={cn(modalForm._, !isFormVisible && modalForm.hidden)} onClick={handleFormVisible}></div>
      <div className={modalForm.form}>
        <FormHeader
          orderNumber={order.id || ""}
          buttonHandler={handleDropdownOpen}
          isDropdownOpen={isDropdownOpen}
        />
        <FormDropdown
          isOpen={isDropdownOpen}
          handleButton={handleDropdownOpen}
          handleResetButton={handleFormClose}
        />

        <div className={modalForm.table}>
          <FormInput
            isDisabled
            title="Дата и время заказа"
            value={formatDate(order.creationDate) || ""}
            icon="locked"
            onChange={() => { }}
          />
          <FormInput
            title="ФИО покупателя"
            placeholder="Введите ФИО"
            value={order.name || ""}
            name="name"
            onChange={handleChange}
          />
          {order.goods && <OrderTable orders={order.goods} sum={order.sum} />}
          <FormInput
            isDisabled
            title="Уровень лояльности"
            placeholder="Введите ФИО"
            value={order.loyalty || ""}
            icon="locked"
            onChange={() => { }}
          />
          <FormInput
            title="Статус заказа"
            placeholder="Выберите статус заказа"
            value={order.status || ""}
            icon="v_arrow"
            buttonHandler={handleDropdownStatusOpen}
            onFocus={handleDropdownStatusOpen}
            onChange={handleDropdownStatusOpen}
            onClick={handleDropdownStatusOpen}
            name="status"
          >
            <StatusDropdown
              isVisible={isStatusDropdownOpen}
              onChange={handleChange}
              onMouseLeave={handleDropdownStatusOpen}
              checkedValue={order.status || ""}
            />
          </FormInput>

          <FormInput
            isValid={false}
            title="Код подтверждения"
            placeholder="Введите код подтверждения"
            value={order.confirmCode || ""}
            onChange={() => { }}
          />
        </div>

        <FormFooter
          buttonHandler={handleSaveButton}
          error={"Ошибка или индикатор загрузки"}
        />
      </div>
    </>
  );
};

export default ModalForm;
