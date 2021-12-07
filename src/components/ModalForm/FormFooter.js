import modalForm from "./css/ModalForm.module.css";
import Button from "../Common/Button";
import { Loader } from "../Common/Loader";

const FormFooter = ({ buttonHandler, error }) => (
  <footer className={modalForm.footer}>
    {error &&
      <div className={modalForm.footer__text}>
        <Loader isLoading />
        {error}
      </div>}
    <Button
      className={modalForm.footer__button}
      svgName="checkmark"
      iconClassName={modalForm.footer__icon}
      onClick={buttonHandler}
    >
      Сохранить
    </Button>
  </footer>
);

export default FormFooter;
