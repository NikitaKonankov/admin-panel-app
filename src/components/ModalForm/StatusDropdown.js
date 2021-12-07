import cn from "classnames";
import dropdown from "./css/status-dropdown.module.css";
import { DROPDOWN_STATUSES } from '../../helpers/constants';
import { capitalizeFirstLetter } from "../../helpers/strings";

const StatusDropdown = ({
  className = dropdown._,
  isVisible,
  id = "status-dropdown",
  onChange,
  onMouseLeave,
  checkedValue,
}) => (
  <form className={cn(className, !isVisible && dropdown.hidden)} id={id} onChange={onChange}>
    <ul className={dropdown.list} onMouseLeave={onMouseLeave}>
      {DROPDOWN_STATUSES.map((element) =>
      (<label className={dropdown.control} key={element}>
        <li className={dropdown.item}>
          <input
            className={dropdown.radio}
            type="radio"
            name="status"
            value={capitalizeFirstLetter(element)}
            defaultChecked={checkedValue === element ? "checked" : false}
          />
          <span className={dropdown.title}>{capitalizeFirstLetter(element)}</span>
        </li>
      </label>
      ))}
    </ul>
  </form>
);

export default StatusDropdown;
