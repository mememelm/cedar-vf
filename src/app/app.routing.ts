import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';

export const AppRoutes: Routes = [
  { path: 'connexion', component: ConnexionComponent },
  { path: '', redirectTo: 'connexion', pathMatch: 'full' },
  {
    path: '', component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
      }]
  },
  {
    path: '**',
    redirectTo: 'connexion'
  }
]
