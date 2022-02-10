import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ItemsReducer } from "./reducers/reducers";
import { PersistPartial } from "redux-persist/es/persistReducer";
import { ItemListState } from "./types/types";

export interface RootState {
  items: ItemListState & PersistPartial;
}

export const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["items"],
};

const rootReducer = combineReducers({
  // Messed up typechecking :(
  items: persistReducer<any, any>(persistConfig, ItemsReducer),
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);
