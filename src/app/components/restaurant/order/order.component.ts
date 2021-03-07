import { Component, Input, OnInit } from '@angular/core';

import { ITable } from './../../../models/models';
import { RestaurantSelectors } from './../../../store/selectors/restaurant.selectors';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order : ITable;
  @Input()    // for edit mode the order component gets the table data from its parent
  set currentOrder(table: ITable){
     this.order = table;
  } 

  constructor(private selectors : RestaurantSelectors) { }

  ngOnInit(): void {
  }
 
  

}
