export interface Item {
  text: string;
  completed: boolean;
}

export type ItemListState = {
  items: Item[];
  modalVisible: boolean;
};

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";
export const SET_MODAL_VISIBLE = "SET_MODAL_VISIBLE";

export type AddItemAction = {
  type: typeof ADD_ITEM;
  item: Item;
};
export type UpdateItemAction = {
  type: typeof UPDATE_ITEM;
  index: number;
  item: Item;
};
export type RemoveItemAction = {
  type: typeof REMOVE_ITEM;
  index: number;
};
export type SetModalVisible = {
  type: typeof SET_MODAL_VISIBLE;
  modalVisible: boolean;
};
export type ItemListAction =
  | AddItemAction
  | UpdateItemAction
  | RemoveItemAction
  | SetModalVisible;
