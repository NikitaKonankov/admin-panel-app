import Checkbox from "../Common/Checkbox";
import SvgElement from "../Icons/SvgElement";
import {
  formatSum,
  formatCount,
} from "../../helpers/numbers";
import { formatDate } from "../../helpers/date"
import { STATUS_CLASSES, STATUS_ICONS } from "../../helpers/statuses";

const orderLabelClass = "table__checkbox-control";
const rowClass = "table__body-item-row";
const itemClass = "table__header-item";
const itemTextClass = "table__header-item-text";
const blockClassPrimary = "table__body-item";
const blockClassChecked = "table__body-item table__body-item_checked";

export const OrderRow = ({
  id,
  creationDate,
  status,
  positionsCount,
  sum,
  name,
  onClick,
  onChange,
  CheckedId,
}) => {
  const isOrderChecked = CheckedId.includes(id);
  const blockClass = isOrderChecked ? blockClassChecked : blockClassPrimary;

  return (
    <div className={blockClass} onClick={onClick} name={id}>
      <div className={rowClass} name={id}>
        <div className={itemClass}>
          <label className={orderLabelClass}>
            <Checkbox onChange={onChange} name={id} checked={isOrderChecked} />
          </label>
        </div>
        <div className={itemClass}>
          <span className={itemTextClass}>{id}</span>
        </div>
        <div className={itemClass}>
          <span className={itemTextClass}>{formatDate(creationDate)}</span>
        </div>
        <div className={STATUS_CLASSES[status]}>
          <SvgElement svgName={STATUS_ICONS[status]} />
          <span className={itemTextClass}>{status}</span>
        </div>
        <li className={itemClass}>
          <span className={itemTextClass}>{formatCount(positionsCount)}</span>
        </li>
        <div className={itemClass}>
          <span className={itemTextClass}>{formatSum(sum)}</span>
        </div>
        <div className={itemClass}>
          <span className={itemTextClass}>{name}</span>
        </div>
      </div>
    </div>
  );
};
