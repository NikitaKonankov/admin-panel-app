import Button from "../Common/Button";
import Searchbar from "../Common/Searchbar";
import { Loader } from "../Common/Loader";

const FilterPrimary = ({
  buttonFiltersHandler,
  resetFiltersHandler,
  onSubmit,
  onChange,
  onClick,
  value,
}) => (
  <div className="filter__wrapper">
    <div className="filter__group">
      <form className="filter__form" onSubmit={onSubmit}>
        <Searchbar
          labelClass="filter__searchbar-group"
          wrapperClass="filter__searchbar-field filter__searchbar-field_empty"
          inputAreaClass="filter__searchbar-search-area"
          value={value}
          onChange={onChange}
        >
          <Button
            className="filter__searchbar-button"
            svgName="incorrect"
            onClick={onClick}
          />
        </Searchbar>
        <Button
          className="filter-button"
          svgName="filter"
          onClick={buttonFiltersHandler}
        >
          Фильтры
        </Button>
        <Button
          className="filter-button filter-button_hidden-icon"
          svgName="filter"
          buttonText="Сбросить фильтры"
          onClick={resetFiltersHandler}
        >
          Сбросить фильтры
        </Button>
      </form>
      <Loader isLoading />
    </div>
  </div>
);

export default FilterPrimary;
