import { Routes } from '@angular/router';
import { ClubListComponent } from './club-list/club-list.component';
import { ClubEditComponent } from './club-edit/club-edit.component';

export const CLUB_ROUTES: Routes = [
  {
    path: 'club',
    component: ClubListComponent
  },
  {
    path: 'club/:id',
    component: ClubEditComponent
  }
]
