import {
  ADD_ITEM,
  ItemListAction,
  ItemListState,
  REMOVE_ITEM,
  UPDATE_ITEM,
} from "../types/types";

const initialState: ItemListState = {
  items: [],
};

export const ItemsReducer = (
  state: ItemListState = initialState,
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
