import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { OrderComponent } from './components/restaurant/order/order.component';
import { ReportComponent } from './components/restaurant/report/report.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { RestaurantSelectors } from './store/selectors/restaurant.selectors';
import { TablesComponent } from './components/restaurant/tables/tables.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantComponent,
    TablesComponent,
    OrderComponent,
    ReportComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ RestaurantSelectors ],
  bootstrap: [AppComponent]
})
export class AppModule { }
