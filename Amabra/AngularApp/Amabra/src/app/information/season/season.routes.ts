import { Routes } from '@angular/router';
import { SeasonListComponent } from './season-list/season-list.component';
import { SeasonEditComponent } from './season-edit/season-edit.component';

export const SEASON_ROUTES: Routes = [
  {
    path: 'season',
    component: SeasonListComponent
  },
  {
    path: 'season/:id',
    component: SeasonEditComponent
  }
]
