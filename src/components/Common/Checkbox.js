import SvgElement from "../Icons/SvgElement";

const checkbox = ({
  className = "checkbox",
  checkboxIconName = "checkmark",
  onChange,
  checked,
  name,
}) => (
  <div className="checkbox-group">
    <input
      type="checkbox"
      className={className}
      onChange={onChange}
      checked={checked}
      name={name}
    />
    <SvgElement svgName={checkboxIconName} />
  </div>
);

export default checkbox;
