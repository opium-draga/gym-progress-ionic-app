
export interface SettingsState {
	selectedWeekDay: number;
  enableNotifications: boolean;
}

const settings = getDefaultSettigs();

export const initialSettingsState: SettingsState = {
	selectedWeekDay: settings.selectedWeekDay,
  enableNotifications: settings.enableNotifications,
};

function getDefaultSettigs(): SettingsState {
  
  const defaultSettingsValue: SettingsState = {
    selectedWeekDay: 0,
    enableNotifications: true
  }
  const settings = <SettingsState>JSON.parse(localStorage.getItem('settings'));

  if(!settings) {
    localStorage.setItem("settings", JSON.stringify(defaultSettingsValue));
    return defaultSettingsValue;
  }

  return settings;
}