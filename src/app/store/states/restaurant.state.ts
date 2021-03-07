import { ITable } from './../../models/models';

export default class RestaurantState {
   tables : ITable[]    // keep the state of all tables
   currentOrder : ITable // keep the current order edited
}
  
export const initializeState = (): RestaurantState => {
    return { 
        tables: [],
        currentOrder: null
     };
};