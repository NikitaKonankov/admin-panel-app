import { formActionTypes } from "./constants";

export const formActions = {
  setVisible: () => ({
    type: formActionTypes.SET_VISIBLE,
  }),
  setOrder: (payload) => ({
    type: formActionTypes.SET_ORDER,
    payload,
  }),
  clearOrder: () => ({
    type: formActionTypes.CLEAR_ORDER,
  }),
};
