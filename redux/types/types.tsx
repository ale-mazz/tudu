import { customTheme } from "../../theme";

export interface Item {
  text: string;
  completed: boolean;
  color: string;
  day: string;
}

export type ItemListState = {
  items: Item[];
};

export type DayState = {
  selectedDay: string;
};

export type ThemeState = {
  theme: customTheme;
};

export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const UPDATE_ITEM = "UPDATE_ITEM";
export const SET_SELECTED_DAY = "SET_SELECTED_DAY";
export const SWITCH_THEME = "SWITCH_THEME";

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

export type SetSelectedDay = {
  type: typeof SET_SELECTED_DAY;
  selectedDay: string;
};

export type ChangeTheme = {
  type: typeof SWITCH_THEME;
  theme: customTheme;
};

export type DayAction = SetSelectedDay;
export type ThemeAction = ChangeTheme;
export type ItemListAction =
  | AddItemAction
  | UpdateItemAction
  | RemoveItemAction;
