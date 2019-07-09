import { Routes } from '@angular/router';
import { TournementListComponent } from './tournement-list/tournement-list.component';
import { TournementEditComponent } from './tournement-edit/tournement-edit.component';

export const TOURNEMENT_ROUTES: Routes = [
  {
    path: 'tournement',
    component: TournementListComponent
  },
  {
    path: 'tournement/:id',
    component: TournementEditComponent
  }
]
