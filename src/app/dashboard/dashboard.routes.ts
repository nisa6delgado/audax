import { Routes } from '@angular/router';

export const DASHBOARD_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.page').then((m) => m.DashboardPage),
  },
  {
    path: 'closing-strategy',
    loadComponent: () =>
      import('./pages/closing-strategy/closing-strategy.page').then(
        (m) => m.ClosingStrategyPage
      ),
  },
];
