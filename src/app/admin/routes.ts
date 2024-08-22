import { Route } from '@angular/router';
import { AdminUsersComponent } from './users/admin-users.component';
import { AdminHomeComponent } from './home/admin-home.component';

export const ADMIN_ROUTES: Route[] = [
    { path: 'home', component: AdminHomeComponent },
    { path: 'users', component: AdminUsersComponent },
];