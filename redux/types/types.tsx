export interface Item {
  text: string;
  completed: boolean;
  color: string;
}

export type ItemListState = {
  items: Item[];
};

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";

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

export type ItemListAction =
  | AddItemAction
  | UpdateItemAction
  | RemoveItemAction;
