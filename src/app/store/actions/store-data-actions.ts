
import {Action} from "@ngrx/store";
import {Weight} from "../state/models/Weight";

export const ADD_WEIGHT_ACTION = "ADD_WEIGHT_ACTION";
export class AddWeightAction implements Action {

  type = ADD_WEIGHT_ACTION;

  constructor(public payload?: Weight) {
  }
}