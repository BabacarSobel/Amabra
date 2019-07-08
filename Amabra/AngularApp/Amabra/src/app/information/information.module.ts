import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player/player.component';
import { ClubModule } from './club/club.module';


@NgModule({
  declarations: [
    PlayerComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ClubModule
  ]
})
export class InformationModule { }
