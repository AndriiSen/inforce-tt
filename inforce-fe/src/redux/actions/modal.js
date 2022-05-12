import { ActionTypes } from "../contants/action-types";

export const openModal = () => {
  return {
    type: ActionTypes.OPEN_MODAL,
  };
};
export const closeModal = () => {
  return {
    type: ActionTypes.CLOSE_MODAL,
  };
};
export const setAdd = () => {
  return {
    type: ActionTypes.SET_ADD,
  };
};
export const setEdit = (data) => {
  return {
    type: ActionTypes.SET_EDIT,
    editData: data,
  };
};
