import cn from "classnames";

const SvgElement = ({
  svgName,
  className = "svg-icon",
  isRotate = false,
  onClick,
}) => (
  <svg className={cn(className, isRotate && `${className}_rotate`)} onClick={onClick}>
    <use xlinkHref={`#${svgName}`}></use>
  </svg>
);

export default SvgElement;
