import cn from "classnames";
import style from "./PageDropdown.module.css";

export const PageDropdown = ({ isVisible = true, onSubmit }) => (
  <form className={cn(style._, !isVisible && style.hidden)} onSubmit={onSubmit}>
    <label className={style.control}>
      <span className={style.title}>Номер страницы</span>
      <div className={style.inputWrapper}>
        <input
          className={style.input}
          placeholder="Введите номер"
          name="page"
          autoComplete="off"
        />
      </div>
    </label>
  </form>
);
