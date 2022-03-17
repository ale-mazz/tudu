import { ActionCreator } from "redux";
import { SWITCH_THEME, ThemeAction } from "../../types/types";
import { customTheme } from "../../../theme";

export const switchTheme: ActionCreator<ThemeAction> = (theme: customTheme) => {
  return { type: SWITCH_THEME, theme };
};
