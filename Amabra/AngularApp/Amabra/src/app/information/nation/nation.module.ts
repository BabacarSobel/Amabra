import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NationListComponent } from './nation-list/nation-list.component';
import { NationEditComponent } from './nation-edit/nation-edit.component';
import { NationService } from './nation.service';
import { NATION_ROUTES } from './nation.routes';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(NATION_ROUTES)
  ],
  declarations: [
    NationListComponent,
    NationEditComponent
  ],
  providers: [
    NationService
  ],
  exports: [
  ]
})
export class NationModule { }
