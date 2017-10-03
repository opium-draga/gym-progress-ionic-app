import {ActionReducer, Action} from "@ngrx/store";
import { CHANGE_SETTINGS_ACTION, ChangeSettingsAction } from "../actions/settings-actions";
import { initialSettingsState, SettingsState } from "../state/settings-state";

export const settingsReducer: ActionReducer<SettingsState> =
  ((state = initialSettingsState, action: Action) => {

    switch (action.type) {

      case CHANGE_SETTINGS_ACTION: {
        return handleChangeSettingsAction(state, action);
      }

      default:
        return state;
    }
  });

function handleChangeSettingsAction(state: SettingsState, action: ChangeSettingsAction) {
  localStorage.setItem("settings", JSON.stringify(action.payload));

  // TODO notification config

  return action.payload;
}