import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { DayReducer, ItemsReducer, ThemeReducer } from "./reducers/reducers";
import { PersistPartial } from "redux-persist/es/persistReducer";
import { DayState, ItemListState, ThemeState } from "./types/types";

export interface RootState {
  items: ItemListState & PersistPartial;
  day: DayState & PersistPartial;
  theme: ThemeState & PersistPartial;
}

export const persistItemConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["items"],
};

export const persistDayConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["day"],
};

export const persistThemeConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["theme"],
};

const rootReducer = combineReducers({
  // Messed up typechecking :(
  items: persistReducer<any, any>(persistItemConfig, ItemsReducer),
  day: persistReducer<any, any>(persistDayConfig, DayReducer),
  theme: persistReducer<any, any>(persistThemeConfig, ThemeReducer),
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
