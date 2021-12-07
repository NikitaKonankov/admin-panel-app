import modalForm from "./css/ModalForm.module.css";
import { OrderFormItem } from "./OrderFormItem";
import { formatSum } from "../../helpers/numbers";

const OrderTable = ({ orders, sum }) => (
  <div className={modalForm.OrderTable}>
    <div className={modalForm.OrdersList}>
      <div className={modalForm.ListHeader}>
        <div className={modalForm.ListItem}>Артикул</div>
        <div className={modalForm.ListItem}>Наименование</div>
        <div className={modalForm.ListItem}>Цена</div>
      </div>
      {orders.map((item) => <OrderFormItem {...item} key={item.article + Math.random()} />)}
      <div className={modalForm.ListFooter}>
        {`Итоговая сумма: ${formatSum(sum)}`}
      </div>
    </div>
  </div>
);

export default OrderTable;
