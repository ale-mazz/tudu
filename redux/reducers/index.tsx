import { combineReducers } from "redux";
import { ItemsReducer } from "./reducers";

export const rootReducer = combineReducers({
  itemsReducer: ItemsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
