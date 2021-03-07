import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { ITable } from './../../../models/models';
import { Observable } from 'rxjs';
import { RestaurantSelectors } from './../../../store/selectors/restaurant.selectors';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
  @Output() editTable = new EventEmitter();
  tables$ : Observable<ITable[]>; 
  
  constructor(private selectors : RestaurantSelectors) { }

  ngOnInit(): void {
     this.tables$ = this.selectors.getTables();
  }
  
  // this will emit the edit table event so the parent component will open the specific order
  openOrderForEdit( tableNumber){
    this.editTable.emit(tableNumber);
  }

}
