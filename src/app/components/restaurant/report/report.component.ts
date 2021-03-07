import { Component, OnInit } from '@angular/core';

import { ETableStatus } from 'src/app/models/types';
import { ITable } from 'src/app/models/models';
import { RestaurantSelectors } from 'src/app/store/selectors/restaurant.selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  tablesSubs : Subscription;
  tables : ITable[];
  totalBalance : number;
  cancelledTables : number;

  constructor(private selectors : RestaurantSelectors) { }

  ngOnInit(): void {
    this.tablesSubs =  this.selectors.getTables().subscribe( (tables) => {
      this.tables = tables;
      this.fillReportValues();
    });
  }
 
  // goes thorug the tables 
  fillReportValues(){
    this.totalBalance = 0;
    this.cancelledTables = 0;
    for(let order of this.tables){
      (order.status === ETableStatus.Cancelled) ? this.cancelledTables++ : this.totalBalance++;
    }
  }

  ngOnDestroy(): void {
   if(this.tablesSubs) {
    this.tablesSubs.unsubscribe();
   }
    
  }

}
