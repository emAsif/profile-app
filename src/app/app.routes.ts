import { Routes } from '@angular/router';
import { ListComponent } from './user/list/list.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'profiles' },
  { path: 'profiles', component: ListComponent },
];
