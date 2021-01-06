import { Routes } from '@angular/router';

import { OperatorComponent } from 'app/pages/operator/operator.component';
import { FormationComponent } from 'app/pages/formation/formation.component';
import { InnovationComponent } from 'app/pages/innovation/innovation.component';
import { CedarManagementComponent } from 'app/pages/cedar-management/cedar-management.component';
import { ProductionComponent } from 'app/pages/production/production.component';
import { EvolutionComponent } from 'app/pages/evolution/evolution.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'operator', component: OperatorComponent },
    { path: 'formation', component: FormationComponent },
    { path: 'innovation', component: InnovationComponent },
    { path: 'cedar', component: CedarManagementComponent },
    { path: 'production', component: ProductionComponent },
    { path: 'evolution', component: EvolutionComponent }
];
