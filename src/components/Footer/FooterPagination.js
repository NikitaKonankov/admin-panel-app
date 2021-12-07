import cn from "classnames";
import Button from "../Common/Button";
import { PageDropdown } from "./PageDropdown/PageDropdown";

const primaryClass = "table__footer-button table__footer-button_small";
const transparentClass = "table__footer-button_transparent"

export const FooterPagination = ({
  onClick,
  page,
  maxPage,
  onClickLast,
  onSubmit,
  isVisible,
}) => {
  let currentPage = Number(page);
  const leftValue = currentPage - 1;
  const rightValue = currentPage + 1;

  const firstButtonValue =
    currentPage !== 1 ? leftValue : currentPage
  const secondButtonValue = firstButtonValue !== currentPage ? currentPage : 0;
  const thirdButtonValue = rightValue;

  const lastPageButton = (
    <>
      <span className="table__pagination-continue">…</span>
      <Button className={cn(primaryClass, transparentClass)} onClick={onClick}>
        {maxPage}
      </Button>
    </>
  );

  return (
    <div className="table__footer-pagination">
      <Button
        className={cn(primaryClass, currentPage !== firstButtonValue && transparentClass)}
        onClick={() => onClick(firstButtonValue)}>
        {firstButtonValue}
      </Button>

      {secondButtonValue ? (
        <Button
          className={cn(primaryClass, currentPage !== secondButtonValue && transparentClass)}
          onClick={() => onClick(secondButtonValue)}>
          {secondButtonValue}
        </Button>
      ) : null}

      {thirdButtonValue <= maxPage && (
        <Button
          className={cn(primaryClass, currentPage !== thirdButtonValue && transparentClass)}
          onClick={() => onClick(thirdButtonValue)}>
          {thirdButtonValue}
        </Button>
      )}
      {maxPage > 3 && page <= maxPage && lastPageButton}

      <Button className={cn(primaryClass, transparentClass)} onClick={onClickLast}>
        ...
      </Button>
      <PageDropdown isVisible={isVisible} onSubmit={onSubmit} />
    </div>
  );
};
