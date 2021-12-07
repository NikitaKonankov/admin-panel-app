import Button from "../Common/Button";

export const PageHeader = () => (
  <div className="page-header">
    <h1 className="page-header__text">Список заказов</h1>
    <Button className="page-header__button page-header__button_transparent" svgName="sun">
      Cветлая тема
    </Button>
  </div>
);
