import { Store } from '@ngrx/store';
import { AppState } from '../../app/store/state/app-state';
import { SettingsState } from '../../app/store/state/settings-state';
import { WeekDay } from './weekDay';
import { Component } from '@angular/core';

import moment from "moment";
import { ChangeSettingsAction } from "../../app/store/actions/settings-actions";

@Component({
  templateUrl: 'settings.html'
})

export class SettingsPage {
    
  daysOfWeek: WeekDay[];
  selectedDayOfWeek: number;
  enableNotifications: boolean; 
    
  constructor(private store: Store<AppState>) {  

    store.select("settingsReducer").subscribe((data: SettingsState) => {
      this.selectedDayOfWeek = data.selectedWeekDay;
      this.enableNotifications = data.enableNotifications;
    });

    this.daysOfWeek = moment.weekdays(true)
      .map((day, index): WeekDay => {
        return {index: index, name: day}
      });
  }

  settingsWasChanged() {
    const newSettings: SettingsState = {
       selectedWeekDay: this.selectedDayOfWeek,
       enableNotifications: this.enableNotifications
    };
    
    this.store.dispatch(new ChangeSettingsAction(newSettings));
  }
}