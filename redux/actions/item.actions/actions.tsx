import {
  ADD_ITEM,
  Item,
  ItemListAction,
  REMOVE_ITEM,
  SET_MODAL_VISIBLE,
  UPDATE_ITEM,
} from "../../types/types";
import { ActionCreator } from "redux";

export const addItem: ActionCreator<ItemListAction> = (item: Item) => {
  return { type: ADD_ITEM, item };
};

export const updateItem: ActionCreator<ItemListAction> = (
  item: Item,
  index: number
) => {
  return { type: UPDATE_ITEM, item, index };
};

export const removeItem: ActionCreator<ItemListAction> = (index: number) => {
  console.log("Action_removeItem");
  return { type: REMOVE_ITEM, index };
};

export const setModalVisible: ActionCreator<ItemListAction> = (
  modalVisible: boolean
) => {
  return { type: SET_MODAL_VISIBLE, modalVisible };
};
