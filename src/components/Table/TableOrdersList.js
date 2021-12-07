import { OrderRow } from "./OrderRow";

export const TableOrdersList = ({
  orders,
  onClick,
  onChange,
  CheckedId,
}) => (
  <div className="table__body">
    <div className="table__body-list">{orders.map((order) => (
      <OrderRow
        {...order}
        key={order.id}
        onClick={onClick}
        onChange={onChange}
        CheckedId={CheckedId}
      />
    ))}</div>
  </div>
);
