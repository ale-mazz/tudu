import {
  ADD_ITEM,
  DayAction,
  Item,
  ItemListAction,
  REMOVE_ITEM,
  SET_SELECTED_DAY,
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
  return { type: REMOVE_ITEM, index };
};

export const setSelectedDay: ActionCreator<DayAction> = (
  selectedDay: string
) => {
  return { type: SET_SELECTED_DAY, selectedDay };
};
