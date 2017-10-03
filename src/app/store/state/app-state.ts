import { StoreDataState, initialStoreDataState } from './store-data-state';
import { SettingsState, initialSettingsState } from "./settings-state";

  
export interface AppState {
  storeData: StoreDataState;
  settings: SettingsState
}

export const initialAppState: AppState = {
  storeData: initialStoreDataState,
  settings: initialSettingsState  
}