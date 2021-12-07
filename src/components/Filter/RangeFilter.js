import Button from "../Common/Button";
import Input from "../Common/Input";

const mainComponentWrapperClass = "filter__input";
const labelClassName = "filter__input-control";
const buttonClassName = "filter__input-button";
const filterTitleClass = "filter__input-title";
const inputWrapperClassDefault =
  "filter__input-field filter__input-field_empty";
const inputShortClass = "filter__input-field_short";

export const RangeFilter = ({
  filterPlaceholder = "ДД.ММ.ГГГГ",
  inputIconName = "incorrect",
  children,
  isShort = false,
  InputClass = "filter__input-area",
  onChange,
  onBlur,
  onClick,
  inputStartId,
  InputEndId,
}) => (
  <div className={mainComponentWrapperClass}>
    <label className={labelClassName}>
      <span className={filterTitleClass}>{children}</span>
      <div
        className={
          isShort
            ? [inputWrapperClassDefault, inputShortClass].join(" ")
            : inputWrapperClassDefault
        }
      >
        <Input
          className={InputClass}
          placeholder={filterPlaceholder}
          onBlur={onBlur}
          onChange={onChange}
          name="start"
          id={inputStartId}
        />

        <Button
          className={buttonClassName}
          svgName={inputIconName}
          onClick={onClick}
        />
      </div>
    </label>

    <label className={labelClassName}>
      <div
        className={
          isShort
            ? [inputWrapperClassDefault, inputShortClass].join(" ")
            : inputWrapperClassDefault
        }
      >
        <Input
          className={InputClass}
          placeholder={filterPlaceholder}
          onBlur={onBlur}
          onChange={onChange}
          name="end"
          id={InputEndId}
        />
        <Button
          className={buttonClassName}
          svgName={inputIconName}
          onClick={onClick}
        />
      </div>
    </label>
  </div>
);
