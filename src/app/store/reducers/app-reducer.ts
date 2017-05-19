
import {ActionReducer, Action} from "@ngrx/store";
import {AppState, initialAppState} from "../state/app-state";
import {INCREMENT, EVENT_FROM_EFFECT} from "../actions/actions-creator";

export const appState: ActionReducer<AppState> =
	(state = initialAppState, action: Action) => {

		switch (action.type) {

			case INCREMENT: {
				console.log('Increment action being handled!');

				console.log("Increment payload", action.payload);

				return {
					counter: state.counter + 1
				}
			}

			case EVENT_FROM_EFFECT: {
				console.log('we cheesin in the reducer over here!');
				return {
					counter: 4
				}
			}

			default:
				return state;
		}
	};