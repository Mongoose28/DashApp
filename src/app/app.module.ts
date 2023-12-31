import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainComponent } from './main/main.component';
import { TopWidgetsComponent } from './top-widgets/top-widgets.component';
import { SalesByMonthsComponent } from './sales-by-months/sales-by-months.component';
import { SalesByCategoryComponent } from './sales-by-category/sales-by-category.component';
import { LastFewTransactionComponent } from './last-few-transaction/last-few-transaction.component';
import { TopThreeProductsComponent } from './top-three-products/top-three-products.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular-highcharts';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SideNavComponent,
    MainComponent,
    TopWidgetsComponent,
    SalesByMonthsComponent,
    SalesByCategoryComponent,
    LastFewTransactionComponent,
    TopThreeProductsComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    ChartModule
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
