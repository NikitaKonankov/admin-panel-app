import cn from "classnames";
import Dropdown from "./css/Dropdown.module.css";
import Button from "../Common/Button";

const FooterDropdown = ({ isOpen = true, handleResetButton, handleButton }) => (
  <form className={cn(Dropdown._, !isOpen && Dropdown.hidden)}>
    <span className={Dropdown.title}>Есть несохраненные изменения</span>
    <Button
      className={cn(Dropdown.button, Dropdown.transparent)}
      textClassName={Dropdown.text}
      iconClassName={Dropdown.icon}
      onClick={handleResetButton}
    >
      Сбросить
    </Button>
    <Button
      className={Dropdown.button}
      textClassName={Dropdown.text}
      iconClassName={Dropdown.icon}
      onClick={handleButton}
    >
      Остаться
    </Button>
  </form>
);

export default FooterDropdown;
