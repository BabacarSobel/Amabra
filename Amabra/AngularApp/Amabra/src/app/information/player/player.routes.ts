import { Routes } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerEditComponent } from './player-edit/player-edit.component';

export const PLAYER_ROUTES: Routes = [
  {
    path: 'player',
    component: PlayerListComponent
  },
  {
    path: 'player/:id',
    component: PlayerEditComponent
  }
]
