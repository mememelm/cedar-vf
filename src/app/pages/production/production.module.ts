import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductionComponent } from './production.component';
import { DataTablesModule } from 'angular-datatables';


@NgModule({
  declarations: [
    ProductionComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule
  ],
  exports: [
    ProductionComponent
  ]
})
export class ProductionModule { }
