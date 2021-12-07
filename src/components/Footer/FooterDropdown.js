import Button from "../Common/Button";

export const FooterDropdown = ({
  ordersCount,
  deleteHandler,
  cancelHandler,
}) => (
  <form className="table__footer-dropdown">
    <span className="table__dropdown-title">Удалить {ordersCount} записей?</span>
    <Button className="table__dropdown-button table__dropdown-button_transparent" onClick={deleteHandler}>
      Удалить
    </Button>
    <Button className="table__dropdown-button" onClick={cancelHandler}>
      Отмена
    </Button>
  </form>
);
