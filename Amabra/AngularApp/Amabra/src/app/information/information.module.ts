import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { ClubModule } from './club/club.module';
import { SeasonModule } from './season/season.module';
import { EditionModule } from './edition/edition.module';
import { TournementModule } from './tournement/tournement.module';
import { PlayerModule } from './player/player.module';
import { NationModule } from './nation/nation.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    ClubModule,
    SeasonModule,
    EditionModule,
    TournementModule,
    PlayerModule,
    NationModule
  ]
})
export class InformationModule {}
