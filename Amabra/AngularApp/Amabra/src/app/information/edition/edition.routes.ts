import { Routes } from '@angular/router';
import { EditionListComponent } from './edition-list/edition-list.component';
import { EditionEditComponent } from './edition-edit/edition-edit.component';

export const EDITION_ROUTES: Routes = [
  {
    path: 'edition',
    component: EditionListComponent
  },
  {
    path: 'edition/:id',
    component: EditionEditComponent
  }
]
