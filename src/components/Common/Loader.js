import SvgElement from "../Icons/SvgElement";
import { useState } from "react";

export const Loader = ({ loaderIcon = "refresh", isLoading }) => {
  const [visible, setVisible] = useState(isLoading);
  if (visible) {
    setTimeout(() => setVisible(!isLoading), 2000);
  }
  clearTimeout();
  return (
    visible && (
      <div className="filter__loader">
        <SvgElement svgName={loaderIcon} />
        <span className="filter__loader-text">Загрузка</span>
      </div>
    )
  );
};
