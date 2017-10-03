
import {Weight} from "./models/Weight";

export interface StoreDataState {
	weightStatistic: Weight[];
}

const weight = <Weight[]>JSON.parse(localStorage.getItem('weightStatistic'));

export const initialStoreDataState: StoreDataState = {
	weightStatistic: weight ? weight : []
};