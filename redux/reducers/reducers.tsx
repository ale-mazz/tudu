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
  const newState: ItemListState = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case ADD_ITEM:
      return { ...newState, items: [...newState.items, action.item] };
    case REMOVE_ITEM:
      const itemsFiltered = newState.items?.filter(
        (item, itemIndex) => itemIndex !== action.index
      );
      return { ...newState, items: itemsFiltered };
    case UPDATE_ITEM:
      return {
        ...newState,
        items: newState.items.map((item, index) => {
          return index !== action.index
            ? item
            : { ...item, completed: !item.completed };
        }),
      };
    default:
      return newState;
  }
};
