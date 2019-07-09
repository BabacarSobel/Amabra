import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { EditionListComponent } from './edition-list/edition-list.component';
import { EditionEditComponent } from './edition-edit/edition-edit.component';
import { EditionService } from './edition.service';
import { EDITION_ROUTES } from './edition.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(EDITION_ROUTES)
  ],
  declarations: [
    EditionListComponent,
    EditionEditComponent
  ],
  providers: [
    EditionService
  ],
  exports: [
  ]
})
export class EditionModule { }
