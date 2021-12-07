import modalForm from "./css/ModalForm.module.css";
import Button from "../Common/Button";

const FormHeader = ({ buttonHandler, orderNumber = "" }) => (
  <header className={modalForm.header}>
    <div className={modalForm.header__title}>{`Заявка #${orderNumber}`}</div>
    <Button
      className={modalForm.button}
      svgName="incorrect"
      iconClassName={modalForm.header__icon}
      onClick={buttonHandler}
    />
  </header>
);

export default FormHeader;
