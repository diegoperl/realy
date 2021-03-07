import { Component, OnInit } from '@angular/core';

import { ITable } from './../../models/models';
import { RestaurantSelectors } from 'src/app/store/selectors/restaurant.selectors';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.css']
})
export class RestaurantComponent implements OnInit {
  showTables: boolean;
  showOrder : boolean;
  showReport: boolean;
  currentOrder : ITable;

  constructor(private selectors : RestaurantSelectors) { }

  ngOnInit(): void {
    this.setContent(0);
  }
  
  newOrder(){
    this.setContent(1);
  }

  showDailyreport(){
    this.setContent(2);
  }

  editTable(tableNumber){
    // get table details from the store 
    // ( probably findOrderByTableNumber should return an observable so this will need to change accordingly)
    this.currentOrder = this.selectors.findOrderByTableNumber(tableNumber);
    this.setContent(1);
  }
  
  // if i had more time i would replace this method for child routing
  setContent(content : number){
    if(content === 0 ) {
      this.showTables = true;
      this.showOrder = false;
      this.showReport = false;
    }
    else if(content === 1){
      this.showTables = false;
      this.showOrder = true;
      this.showReport = false;
    }
    else{
      this.showTables = false;
      this.showOrder = false;
      this.showReport = true;
    }
  }
}
