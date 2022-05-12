import { ActionTypes } from "../contants/action-types";

const modalReducer = (
  state = { isEdit: false, isOpen: false, editData: null },
  action
) => {
  switch (action.type) {
    case ActionTypes.OPEN_MODAL:
      return {
        ...state,
        isOpen: true,
      };
    case ActionTypes.CLOSE_MODAL:
      return {
        ...state,
        isOpen: false,
      };
    case ActionTypes.SET_EDIT:
      return {
        ...state,
        isEdit: true,
        editData: action.editData,
      };
    case ActionTypes.SET_ADD:
      return {
        ...state,
        isEdit: false,
      };
    default:
      return state;
  }
};

export default modalReducer;
