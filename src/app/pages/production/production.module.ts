import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductionComponent } from './production.component';
import { DataTablesModule } from 'angular-datatables';
import { CuviComponent } from './cuvi/cuvi.component';
import { FormsModule } from '@angular/forms';
import { CumaComponent } from './cuma/cuma.component';
import { ApicultureComponent } from './apiculture/apiculture.component';
import { AvicultureComponent } from './aviculture/aviculture.component';
import { CunnicultureComponent } from './cunniculture/cunniculture.component';
import { BovinComponent } from './bovin/bovin.component';
import { PorcicultureComponent } from './porciculture/porciculture.component';
import { CuviHistoriqueComponent } from './cuvi-historique/cuvi-historique.component';
import { CumaHistoriqueComponent } from './cuma-historique/cuma-historique.component';
import { FruitComponent } from './fruit/fruit.component';
import { FruitHistoriqueComponent } from './fruit-historique/fruit-historique.component';


@NgModule({
  declarations: [
    ProductionComponent,
    CuviComponent,
    CumaComponent,
    ApicultureComponent,
    AvicultureComponent,
    CunnicultureComponent,
    BovinComponent,
    PorcicultureComponent,
    CuviHistoriqueComponent,
    CumaHistoriqueComponent,
    FruitComponent,
    FruitHistoriqueComponent
  ],
  imports: [
    CommonModule,
    DataTablesModule,
    FormsModule
  ],
  exports: [
    ProductionComponent,
    CuviComponent,
    CumaComponent
  ]
})
export class ProductionModule { }
