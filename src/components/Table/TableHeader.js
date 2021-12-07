import SvgElement from "../Icons/SvgElement";
import Checkbox from "../Common/Checkbox";
import {FILTERS} from '../../helpers/constants';

const itemClassName = "table__header-item";
const itemTextClassName = "table__header-item-text";
const checkboxLabelClass =
  "table__checkbox-control table__checkbox-control_primary";
const listClass = "table__header-list";

const HEADERS_FILTER_ICON = "v_arrow";

const TableHeader = ({ onClick, onChangeCheckbox, iconRotate }) => (
  <div className="table__header">
    <div className={listClass}>
      <div className={itemClassName}>
        <label className={checkboxLabelClass}>
          <Checkbox onChange={onChangeCheckbox} name="headerCheckbox" />
        </label>
      </div>
      <div className={itemClassName}>
        <span className={itemTextClassName}>#</span>
      </div>
      <div className={itemClassName} onClick={() => onClick(FILTERS.DATE)}>
        <span className={itemTextClassName}>Дата</span>
        <SvgElement
          svgName={HEADERS_FILTER_ICON}
          isRotate={iconRotate.creationDate}
        />
      </div>
      <div className={itemClassName} onClick={() => onClick(FILTERS.STATUS)}>
        <span className={itemTextClassName}>Статус</span>
        <SvgElement
          svgName={HEADERS_FILTER_ICON}
          isRotate={iconRotate.status}
        />
      </div>
      <div className={itemClassName} onClick={() => onClick(FILTERS.POSITION)}>
        <span className={itemTextClassName}>Позиций</span>
        <SvgElement
          svgName={HEADERS_FILTER_ICON}
          isRotate={iconRotate.positionsCount}
        />
      </div>
      <div className={itemClassName} onClick={() => onClick(FILTERS.SUM)}>
        <span className={itemTextClassName}>Сумма</span>
        <SvgElement svgName={HEADERS_FILTER_ICON} isRotate={iconRotate.sum} />
      </div>
      <div className={itemClassName}>
        <span className={itemTextClassName}>ФИО покупателя</span>
      </div>
    </div>
  </div>
);

export default TableHeader;
