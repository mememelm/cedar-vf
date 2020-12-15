import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { OperatorComponent } from '../../pages/operator/operator.component';
import { FormationComponent } from '../../pages/formation/formation.component';
import { InnovationComponent } from '../../pages/innovation/innovation.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables';
import { DomaineCedarComponent } from 'app/shared/application/domaine-cedar/domaine-cedar.component';
import { CedarManagementComponent } from 'app/pages/cedar-management/cedar-management.component';
import { ProductionModule } from 'app/pages/production/production.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule,
    DataTablesModule,
    ReactiveFormsModule,
    ProductionModule
  ],
  declarations: [

    OperatorComponent,
    FormationComponent,
    InnovationComponent,
    DomaineCedarComponent,
    CedarManagementComponent
  ], 
  exports: [
    OperatorComponent,
    FormationComponent,
    InnovationComponent,
    DomaineCedarComponent,
    CedarManagementComponent
  ]
})

export class AdminLayoutModule { }
