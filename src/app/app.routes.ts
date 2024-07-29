import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent, title: 'Home' },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {
        path: 'about',
        loadComponent: () => import('./about/about.component').then(m => m.AboutComponent), title: 'About'
    },
    {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent), title: 'Dashboard'
    },
    {
        path: 'grid',
        loadComponent: () => import('./grid/grid.component').then(m => m.GridComponent), title: 'Grid'
    },
    {
        path: '**',
        loadComponent: () => import('./not-found/not-found.component').then(m => m.NotFoundComponent), title: 'Not Found'
    },
];