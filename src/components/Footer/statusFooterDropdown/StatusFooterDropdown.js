import cn from "classnames";
import dropdown from "./status-dropdown.module.css";
import { DROPDOWN_STATUSES } from '../../../helpers/constants'
import { capitalizeFirstLetter } from "../../../helpers/strings";

export const StatusFooterDropdown = ({
  className = dropdown._,
  isVisible,
  id = "footer-dropdown",
  onChange,
  onMouseLeave,
}) => (
  <form
    className={cn(className, !isVisible && dropdown.hidden)}
    id={id}
    onChange={onChange}
    onMouseLeave={onMouseLeave}
  >
    <ul className={dropdown.list}>{DROPDOWN_STATUSES.map((element) => (
      <label className={dropdown.control} key={element}>
        <li className={dropdown.item}>
          <input
            className={dropdown.radio}
            type="radio"
            name="status"
            value={capitalizeFirstLetter(element)}
          />
          <span className={dropdown.title}>{capitalizeFirstLetter(element)}</span>
        </li>
      </label>
    ))}</ul>
  </form>
);
