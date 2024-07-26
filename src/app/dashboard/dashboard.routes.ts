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
  {
    path: 'closing-simulation',
    loadComponent: () =>
      import('./pages/closing-simulation/closing-simulation.page').then(
        (m) => m.ClosingSimulationPage
      ),
  },
  {
    path: 'supplies',
    loadComponent: () =>
      import('./pages/simulation-list/simulation-list.page').then(
        (m) => m.SimulationListPage
      ),
  },
  {
    path: 'invoices',
    loadComponent: () =>
      import('./pages/invoices/invoices.page').then((m) => m.InvoicesPage),
  }
];
