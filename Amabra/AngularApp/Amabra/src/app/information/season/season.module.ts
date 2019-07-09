import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SeasonListComponent } from './season-list/season-list.component';
import { SeasonEditComponent } from './season-edit/season-edit.component';
import { SeasonService } from './season.service';
import { SEASON_ROUTES } from './season.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(SEASON_ROUTES)
  ],
  declarations: [
    SeasonListComponent,
    SeasonEditComponent
  ],
  providers: [
    SeasonService
  ],
  exports: [
  ]
})
export class SeasonModule { }
