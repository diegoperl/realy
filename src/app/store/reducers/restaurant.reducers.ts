import { ITable } from "src/app/models/models";
import { initializeState } from "../states/restaurant.state";

export const intialState = initializeState();

export function addResturantReducer(state: ITable[] = [], action) {
    switch (action.type) {
      case ADD_PRODUCT:
          return [...state, action.payload.tables];
      default:
          return state;
      }
  }


