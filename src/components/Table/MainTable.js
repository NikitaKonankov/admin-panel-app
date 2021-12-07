import { PageHeader } from "../Header/PageHeader";
import { OrdersFilter } from "../Filter/OrdersFilter";
import { OrdersTable } from "./OrdersTable";
import { SvgSprite } from "../Icons/SvgSprite";

export const MainTable = () => (
  <div className="main-wrapper">
    <PageHeader />
    <OrdersFilter />
    <OrdersTable />
    <SvgSprite />
  </div>
);
