import { combineReducers } from "redux";
import { ordersReducer as orders } from "./orders";
import { formReducer as form } from "./modalForm";
import { filtersReducer as filters } from './filters';

export const reducers = combineReducers({
  orders,
  form,
  filters
});
