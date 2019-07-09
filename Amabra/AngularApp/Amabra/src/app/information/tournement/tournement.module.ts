import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TournementListComponent } from './tournement-list/tournement-list.component';
import { TournementEditComponent } from './tournement-edit/tournement-edit.component';
import { TournementService } from './tournement.service';
import { TOURNEMENT_ROUTES } from './tournement.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(TOURNEMENT_ROUTES)
  ],
  declarations: [
    TournementListComponent,
    TournementEditComponent
  ],
  providers: [
    TournementService
  ],
  exports: [
  ]
})
export class TournementModule { }
