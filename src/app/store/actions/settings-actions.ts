
import {Action} from "@ngrx/store";
import { SettingsState } from "../state/settings-state";

export const CHANGE_SETTINGS_ACTION = "CHANGE_SETTINGS_ACTION";
export class ChangeSettingsAction implements Action {

  type = CHANGE_SETTINGS_ACTION;

  constructor(public payload?: SettingsState) {
  }
}