import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ClubListComponent } from './club-list/club-list.component';
import { ClubEditComponent } from './club-edit/club-edit.component';
import { ClubService } from './club.service';
import { CLUB_ROUTES } from './club.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(CLUB_ROUTES)
  ],
  declarations: [
    ClubListComponent,
    ClubEditComponent
  ],
  providers: [
    ClubService
  ],
  exports: [
  ]
})
export class ClubModule { }
