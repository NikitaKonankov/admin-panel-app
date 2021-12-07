import cn from "classnames";
import Checkbox from "../Common/Checkbox";
import dropdown from "./css/filter-dropdown.module.css";
import { capitalizeFirstLetter } from "../../helpers/strings";
import { DROPDOWN_STATUSES } from '../../helpers/constants';

export const FilterDropdown = ({
  className = dropdown._,
  isVisible,
  DropdownStatuses = DROPDOWN_STATUSES,
  onChange,
  onMouseLeave,
}) => (
  <div className={cn(className, !isVisible && dropdown.hidden)} onMouseLeave={onMouseLeave}>
    {DropdownStatuses.map((element) => (
      <label className={dropdown.control} key={element}>
        <div className={dropdown.item}>
          <Checkbox onChange={onChange} name={capitalizeFirstLetter(element)} />
          <span className={dropdown.title}>{capitalizeFirstLetter(element)}</span>
        </div>
      </label>
    ))}
  </div>
);
