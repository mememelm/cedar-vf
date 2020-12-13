import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { OperatorComponent } from 'app/pages/operator/operator.component';
import { FormationComponent } from 'app/pages/formation/formation.component';
import { InnovationComponent } from 'app/pages/innovation/innovation.component';
import { CedarManagementComponent } from 'app/pages/cedar-management/cedar-management.component';
import { ProductionComponent } from 'app/pages/production/production.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'operator', component: OperatorComponent },
    { path: 'formation', component: FormationComponent },
    { path: 'innovation', component: InnovationComponent },
    { path: 'cedar', component: CedarManagementComponent },
    { path: 'production', component: ProductionComponent },

    { path: 'dashboard', component: DashboardComponent },
    { path: 'user', component: UserComponent },
    { path: 'table', component: TableComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'upgrade', component: UpgradeComponent }
];
