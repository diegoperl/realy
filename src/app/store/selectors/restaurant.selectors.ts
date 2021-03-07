import { ITable } from './../../models/models';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Store } from "@ngrx/store";

@Injectable({
    providedIn: "root"
})

export class RestaurantSelectors {
    constructor(private store : Store){}

  // returns the tables
   getTables():  Observable<ITable[]> {
     return this.store.select(state => state["tables"]);
   }

   // retuns the current order being edited
   getCurrentOrder() :  Observable<ITable> {
    return this.store.select(state => state["currentOrder"]);
  }

  findOrderByTableNumber(tableNumber : number) : ITable{
    // iterate through all the tables and return the matched table 
    return null;
  }   

}
