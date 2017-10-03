import {ActionReducer, Action} from "@ngrx/store";
import { initialStoreDataState, StoreDataState } from "../state/store-data-state";
import { AddWeightAction, ADD_WEIGHT_ACTION } from "../actions/store-data-actions";
import * as _ from 'lodash';

export const storeDataReducer: ActionReducer<StoreDataState> =
  ((state = initialStoreDataState, action: Action) => {

    switch (action.type) {

      case ADD_WEIGHT_ACTION: {
        return handleAddWeightAction(state, action);
      }

      default:
        return state;
    }
  });

function handleAddWeightAction(state: StoreDataState, action: AddWeightAction): StoreDataState {

  const newAppState: StoreDataState = {
    weightStatistic: _.clone(state.weightStatistic)
  };

  newAppState.weightStatistic.push(action.payload);
  localStorage.setItem("weightStatistic", JSON.stringify(newAppState.weightStatistic));

  return newAppState;
}