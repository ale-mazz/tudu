import {
  ADD_ITEM,
  DayAction,
  DayState,
  ItemListAction,
  ItemListState,
  REMOVE_ITEM,
  SET_SELECTED_DAY,
  UPDATE_ITEM,
} from "../types/types";

const initialItemsState: ItemListState = {
  items: [],
};

const initialDayState: DayState = {
  selectedDay: "",
};

export const ItemsReducer = (
  state: ItemListState = initialItemsState,
  action: ItemListAction
) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, items: [...state.items, action.item] };
    case REMOVE_ITEM:
      const itemsFiltered = state.items?.filter(
        (item, itemIndex) => itemIndex !== action.index
      );
      return { ...state, items: itemsFiltered };
    case UPDATE_ITEM:
      return {
        ...state,
        items: state.items.map((item, index) => {
          return index !== action.index
            ? item
            : { ...item, completed: !item.completed };
        }),
      };
    default:
      return state;
  }
};

export const DayReducer = (
  state: DayState = initialDayState,
  action: DayAction
) => {
  switch (action.type) {
    case SET_SELECTED_DAY:
      return { selectedDay: action.selectedDay };
    default:
      return state;
  }
};
