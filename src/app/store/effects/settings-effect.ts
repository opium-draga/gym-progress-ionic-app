import { Injectable } from '@angular/core';
import {Actions, Effect} from "@ngrx/effects";
import {Observable} from "rxjs/Observable";
import {Action} from "@ngrx/store";
import { CHANGE_SETTINGS_ACTION } from "../actions/settings-actions";


@Injectable()
export class SettingsEffect {

    constructor(private actions$: Actions){
    }

    @Effect() newMessages$: Observable<Action> = this.actions$
      .ofType(CHANGE_SETTINGS_ACTION);
      // .switchMap(action => this.threadService.saveNewMessage(action.payload))
      // .catch(() => Observable.of(new ErrorOccuredAction("Error occurred while saving message")) );

}
