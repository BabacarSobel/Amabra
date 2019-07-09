import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PlayerListComponent } from './player-list/player-list.component';
import { PlayerEditComponent } from './player-edit/player-edit.component';
import { PlayerService } from './player.service';
import { PLAYER_ROUTES } from './player.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(PLAYER_ROUTES)
  ],
  declarations: [
    PlayerListComponent,
    PlayerEditComponent
  ],
  providers: [
    PlayerService
  ],
  exports: [
  ]
})
export class PlayerModule { }
